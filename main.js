const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });
}

const articleList = document.querySelector("[data-article-list]");
const articleSearch = document.querySelector("[data-article-search]");
const articleResults = document.querySelector("[data-article-results]");
const pagination = document.querySelector("[data-pagination]");

if (articleList && articleSearch && articleResults && pagination) {
  const articles = Array.from(articleList.querySelectorAll(".article-list-item"));
  const perPage = 6;
  let currentPage = 1;
  let filteredArticles = articles;

  const normalize = (value) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const updateResultsText = () => {
    const total = filteredArticles.length;
    const noun = total === 1 ? "artículo" : "artículos";
    articleResults.textContent = `${total} ${noun} encontrados`;
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredArticles.length / perPage);
    pagination.innerHTML = "";

    if (totalPages <= 1) {
      return;
    }

    const createButton = (label, page, options = {}) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.disabled = Boolean(options.disabled);
      button.classList.toggle("is-active", page === currentPage && !options.control);
      if (page === currentPage && !options.control) {
        button.setAttribute("aria-current", "page");
      }
      button.addEventListener("click", () => {
        currentPage = page;
        renderArticles();
        articleList.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      pagination.appendChild(button);
    };

    createButton("Anterior", Math.max(1, currentPage - 1), {
      disabled: currentPage === 1,
      control: true,
    });

    for (let page = 1; page <= totalPages; page += 1) {
      createButton(String(page), page);
    }

    createButton("Siguiente", Math.min(totalPages, currentPage + 1), {
      disabled: currentPage === totalPages,
      control: true,
    });
  };

  function renderArticles() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const visibleArticles = filteredArticles.slice(start, end);

    articles.forEach((article) => {
      article.classList.toggle("is-hidden", !visibleArticles.includes(article));
    });

    updateResultsText();
    renderPagination();
  }

  articleSearch.addEventListener("input", () => {
    const query = normalize(articleSearch.value.trim());
    currentPage = 1;
    filteredArticles = query
      ? articles.filter((article) => normalize(article.textContent).includes(query))
      : articles;
    renderArticles();
  });

  renderArticles();
}

const calculateWeightedScore = (items) => {
  const score = items.reduce((total, item) => {
    const value = Math.min(4, Math.max(0, Number(item.value) || 0));
    const weight = Math.max(0, Number(item.weight) || 0);
    return total + (value / 4) * weight;
  }, 0);
  const roundedScore = Math.round(score);

  if (roundedScore >= 80) {
    return {
      score: roundedScore,
      verdict: "pilot",
      message: "Puede justificar un piloto controlado si no existe ningún fallo eliminatorio.",
    };
  }
  if (roundedScore >= 60) {
    return {
      score: roundedScore,
      verdict: "adjust",
      message: "Corrige el flujo, reduce el alcance o compara otra opción antes de comprar.",
    };
  }
  if (roundedScore > 0) {
    return {
      score: roundedScore,
      verdict: "stop",
      message: "La carga de corrección o el riesgo no justifican todavía la compra.",
    };
  }
  return {
    score: 0,
    verdict: "incomplete",
    message: "Completa la prueba antes de decidir.",
  };
};

const calculateCostModel = (input) => {
  const number = (value, maximum = Number.POSITIVE_INFINITY) => {
    const parsed = Number(value);
    return Math.min(maximum, Math.max(0, Number.isFinite(parsed) ? parsed : 0));
  };
  const values = {
    volume: number(input.volume),
    before: number(input.before),
    withAi: number(input.withAi),
    review: number(input.review),
    correctionRate: number(input.correctionRate, 100),
    correctionTime: number(input.correctionTime),
    hourlyRate: number(input.hourlyRate),
    licenses: number(input.licenses),
    variable: number(input.variable),
    implementation: number(input.implementation),
    training: number(input.training),
    incidents: number(input.incidents),
    currency: String(input.currency || "UM").trim().slice(0, 8) || "UM",
  };
  const averageCorrection = (values.correctionRate / 100) * values.correctionTime;
  const minutesSaved = values.before - (values.withAi + values.review + averageCorrection);
  const valuePerUnit = (minutesSaved / 60) * values.hourlyRate;
  const grossValue = valuePerUnit * values.volume;
  const monthlyCost =
    values.licenses + values.variable + values.implementation + values.training + values.incidents;
  const netBenefit = grossValue - monthlyCost;
  const breakEven = valuePerUnit > 0 ? Math.ceil(monthlyCost / valuePerUnit) : null;
  const status =
    minutesSaved <= 0
      ? "no_time_savings"
      : netBenefit > 0
        ? "positive"
        : netBenefit === 0
          ? "break_even"
          : "negative";

  return {
    ...values,
    averageCorrection,
    minutesSaved,
    valuePerUnit,
    grossValue,
    monthlyCost,
    netBenefit,
    breakEven,
    status,
  };
};

const assessDataSelection = ({ kinds = [], approvedEnvironment = false, externalAction = false }) => {
  const selected = new Set(kinds);

  if (selected.size === 0) {
    return {
      level: "empty",
      label: "Falta clasificar",
      title: "Selecciona al menos una categoría",
      message: "No introduzcas contenido real en este formulario.",
      actions: ["Describe la entrada por categorías, sin copiar datos."],
    };
  }
  if (selected.has("secret") || selected.has("regulated")) {
    return {
      level: "stop",
      label: "Detener y escalar",
      title: "No pegues esta información",
      message: "La entrada incluye secretos técnicos o una categoría que necesita revisión especializada.",
      actions: [
        "Usa el canal y la persona responsable definidos por tu organización.",
        "Si ya compartiste una credencial, revócala y reporta el incidente.",
        "Prueba el flujo con datos ficticios mientras se evalúa el uso real.",
      ],
    };
  }
  if (selected.has("personal") || selected.has("confidential")) {
    return {
      level: "minimize",
      label: "Minimizar y autorizar",
      title: approvedEnvironment ? "Reduce los datos antes de continuar" : "No uses este entorno todavía",
      message: "La aprobación de una herramienta no elimina la necesidad de retirar campos y limitar el propósito.",
      actions: [
        "Elimina identificadores y campos que no cambian el resultado.",
        "Confirma que el plan y esta categoría de datos estén aprobados.",
        externalAction
          ? "Exige revisión humana antes de publicar, decidir o ejecutar."
          : "Registra propósito, responsable y fecha de revisión.",
      ],
    };
  }
  if (selected.has("internal") || !approvedEnvironment) {
    return {
      level: "caution",
      label: "Comprobar el entorno",
      title: "Continúa solo en una herramienta aprobada",
      message: "La información no pública necesita una decisión explícita sobre cuenta, plan, retención y acceso.",
      actions: [
        "Confirma herramienta, plan, cuenta y controles de acceso.",
        "Usa una muestra mínima y evita conectores innecesarios.",
        externalAction
          ? "Añade revisión humana antes de cualquier acción externa."
          : "Conserva evidencia de la aprobación.",
      ],
    };
  }
  return {
    level: "continue",
    label: "Continuar con límites",
    title: "La entrada parece pública o ficticia",
    message: "Todavía debes comprobar fuente, licencia, datos incrustados y la exactitud de la salida.",
    actions: [
      "Confirma que no existan comentarios, metadatos o identificadores ocultos.",
      "Mantén la muestra necesaria para la tarea.",
      externalAction
        ? "Revisa la salida antes de publicarla o ejecutar acciones."
        : "Documenta el alcance de la prueba.",
    ],
  };
};

const scoreCalculator = document.querySelector("[data-score-calculator]");

if (scoreCalculator) {
  const scoreInputs = Array.from(scoreCalculator.querySelectorAll("[data-score]"));
  const scoreResult = scoreCalculator.querySelector("[data-score-result]");
  const scoreVerdict = scoreCalculator.querySelector("[data-score-verdict]");

  const renderScore = () => {
    const calculation = calculateWeightedScore(
      scoreInputs.map((input) => ({ value: input.value, weight: input.dataset.weight })),
    );
    scoreResult.textContent = `${calculation.score} / 100`;
    scoreVerdict.textContent = calculation.message;
  };

  scoreInputs.forEach((input) => {
    input.addEventListener("input", renderScore);
  });

  scoreCalculator.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  renderScore();
}

const costCalculator = document.querySelector("[data-cost-calculator]");

if (costCalculator) {
  const costInputs = Array.from(costCalculator.querySelectorAll("[data-cost-input]"));
  const downloadButton = costCalculator.querySelector("[data-cost-download]");
  const status = costCalculator.querySelector("[data-cost-status]");
  const result = (name) => costCalculator.querySelector(`[data-cost-result="${name}"]`);
  const numberFormatter = new Intl.NumberFormat("es", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  let latestCalculation;

  const getInput = (name) => costCalculator.querySelector(`[data-cost-input="${name}"]`);
  const formatNumber = (value) => numberFormatter.format(value);
  const formatMoney = (value, currency) => `${formatNumber(value)} ${currency}`;

  const calculateCost = () => {
    latestCalculation = calculateCostModel({
      volume: getInput("volume").value,
      before: getInput("before").value,
      withAi: getInput("withAi").value,
      review: getInput("review").value,
      correctionRate: getInput("correctionRate").value,
      correctionTime: getInput("correctionTime").value,
      hourlyRate: getInput("hourlyRate").value,
      licenses: getInput("licenses").value,
      variable: getInput("variable").value,
      implementation: getInput("implementation").value,
      training: getInput("training").value,
      incidents: getInput("incidents").value,
      currency: getInput("currency").value,
    });
    const data = latestCalculation;

    result("minutesSaved").textContent = `${formatNumber(data.minutesSaved)} min`;
    result("grossValue").textContent = formatMoney(data.grossValue, data.currency);
    result("monthlyCost").textContent = formatMoney(data.monthlyCost, data.currency);
    result("netBenefit").textContent = formatMoney(data.netBenefit, data.currency);
    result("breakEven").textContent =
      data.breakEven === null ? "No alcanzable" : `${formatNumber(data.breakEven)} unidades/mes`;

    if (data.status === "no_time_savings") {
      status.textContent = "El flujo no ahorra tiempo por unidad; el punto de equilibrio no es alcanzable con estos datos.";
    } else if (data.status === "positive") {
      status.textContent = "El beneficio neto estimado es positivo. Confirma calidad, demanda y riesgos antes de decidir.";
    } else if (data.status === "break_even") {
      status.textContent = "El escenario está exactamente en equilibrio antes de impuestos y riesgos no cuantificados.";
    } else {
      status.textContent = "El costo mensual supera el valor del tiempo ahorrado con estos datos.";
    }
  };

  const escapeCsvCell = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const downloadCsv = () => {
    if (!costCalculator.reportValidity()) {
      return;
    }
    calculateCost();
    const data = latestCalculation;
    const rows = [
      ["campo", "valor", "unidad_o_moneda"],
      ["fecha_de_revision_de_la_calculadora", "2026-09-21", "AAAA-MM-DD"],
      ["unidades_mensuales", data.volume, "unidades"],
      ["tiempo_anterior_por_unidad", data.before, "minutos"],
      ["tiempo_con_ia_por_unidad", data.withAi, "minutos"],
      ["revision_por_unidad", data.review, "minutos"],
      ["tasa_de_correccion_adicional", data.correctionRate, "%"],
      ["tiempo_por_correccion_adicional", data.correctionTime, "minutos"],
      ["correccion_adicional_promedio", data.averageCorrection, "minutos_por_unidad"],
      ["costo_por_hora", data.hourlyRate, data.currency],
      ["licencias_mensuales", data.licenses, data.currency],
      ["consumo_variable_mensual", data.variable, data.currency],
      ["implementacion_amortizada_mensual", data.implementation, data.currency],
      ["capacitacion_y_soporte_mensual", data.training, data.currency],
      ["reserva_por_incidencias_mensual", data.incidents, data.currency],
      ["ahorro_util_por_unidad", data.minutesSaved, "minutos"],
      ["valor_por_unidad", data.valuePerUnit, data.currency],
      ["valor_bruto_mensual", data.grossValue, data.currency],
      ["costo_mensual_real", data.monthlyCost, data.currency],
      ["beneficio_neto_mensual", data.netBenefit, data.currency],
      ["punto_de_equilibrio", data.breakEven ?? "no_alcanzable", "unidades_por_mes"],
    ];
    const csv = `\uFEFF${rows.map((row) => row.map(escapeCsvCell).join(",")).join("\r\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "calculo-costo-real-ia-2026-09-21.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  costInputs.forEach((input) => input.addEventListener("input", calculateCost));
  costCalculator.addEventListener("submit", (event) => {
    event.preventDefault();
    if (costCalculator.reportValidity()) {
      calculateCost();
    }
  });
  costCalculator.addEventListener("reset", () => requestAnimationFrame(calculateCost));
  downloadButton.addEventListener("click", downloadCsv);
  downloadButton.disabled = false;
  calculateCost();
}

const dataAssessment = document.querySelector("[data-data-assessment]");

if (dataAssessment) {
  const kinds = Array.from(dataAssessment.querySelectorAll("[data-data-kind]"));
  const approvedEnvironment = dataAssessment.querySelector("[data-approved-environment]");
  const externalAction = dataAssessment.querySelector("[data-external-action]");
  const result = dataAssessment.querySelector("[data-data-result]");
  const level = dataAssessment.querySelector("[data-data-level]");
  const title = dataAssessment.querySelector("[data-data-title]");
  const message = dataAssessment.querySelector("[data-data-message]");
  const actions = dataAssessment.querySelector("[data-data-actions]");

  const renderActions = (items) => {
    actions.innerHTML = "";
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      actions.appendChild(listItem);
    });
  };

  const renderAssessment = () => {
    const assessment = assessDataSelection({
      kinds: kinds.filter((input) => input.checked).map((input) => input.value),
      approvedEnvironment: approvedEnvironment.checked,
      externalAction: externalAction.checked,
    });
    result.dataset.level = assessment.level;
    level.textContent = assessment.label;
    title.textContent = assessment.title;
    message.textContent = assessment.message;
    renderActions(assessment.actions);
  };

  dataAssessment.addEventListener("change", renderAssessment);
  renderAssessment();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculateWeightedScore, calculateCostModel, assessDataSelection };
}
