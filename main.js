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

const scoreCalculator = document.querySelector("[data-score-calculator]");

if (scoreCalculator) {
  const scoreInputs = Array.from(scoreCalculator.querySelectorAll("[data-score]"));
  const scoreResult = scoreCalculator.querySelector("[data-score-result]");
  const scoreVerdict = scoreCalculator.querySelector("[data-score-verdict]");

  const renderScore = () => {
    const score = scoreInputs.reduce((total, input) => {
      const value = Math.min(4, Math.max(0, Number(input.value) || 0));
      const weight = Number(input.dataset.weight) || 0;
      return total + (value / 4) * weight;
    }, 0);
    const roundedScore = Math.round(score);

    scoreResult.textContent = `${roundedScore} / 100`;

    if (roundedScore >= 80) {
      scoreVerdict.textContent = "Puede justificar un piloto controlado si no existe ningún fallo eliminatorio.";
    } else if (roundedScore >= 60) {
      scoreVerdict.textContent = "Corrige el flujo, reduce el alcance o compara otra opción antes de comprar.";
    } else if (roundedScore > 0) {
      scoreVerdict.textContent = "La carga de corrección o el riesgo no justifican todavía la compra.";
    } else {
      scoreVerdict.textContent = "Completa la prueba antes de decidir.";
    }
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
  const getNumber = (name, maximum = Number.POSITIVE_INFINITY) => {
    const value = Number(getInput(name).value);
    return Math.min(maximum, Math.max(0, Number.isFinite(value) ? value : 0));
  };
  const formatNumber = (value) => numberFormatter.format(value);
  const getCurrency = () => getInput("currency").value.trim().slice(0, 8) || "UM";
  const formatMoney = (value, currency) => `${formatNumber(value)} ${currency}`;

  const calculateCost = () => {
    const values = {
      volume: getNumber("volume"),
      before: getNumber("before"),
      withAi: getNumber("withAi"),
      review: getNumber("review"),
      correctionRate: getNumber("correctionRate", 100),
      correctionTime: getNumber("correctionTime"),
      hourlyRate: getNumber("hourlyRate"),
      licenses: getNumber("licenses"),
      variable: getNumber("variable"),
      implementation: getNumber("implementation"),
      training: getNumber("training"),
      incidents: getNumber("incidents"),
      currency: getCurrency(),
    };

    const averageCorrection = (values.correctionRate / 100) * values.correctionTime;
    const minutesSaved = values.before - (values.withAi + values.review + averageCorrection);
    const valuePerUnit = (minutesSaved / 60) * values.hourlyRate;
    const grossValue = valuePerUnit * values.volume;
    const monthlyCost =
      values.licenses +
      values.variable +
      values.implementation +
      values.training +
      values.incidents;
    const netBenefit = grossValue - monthlyCost;
    const breakEven = valuePerUnit > 0 ? Math.ceil(monthlyCost / valuePerUnit) : null;

    latestCalculation = {
      ...values,
      averageCorrection,
      minutesSaved,
      valuePerUnit,
      grossValue,
      monthlyCost,
      netBenefit,
      breakEven,
    };

    result("minutesSaved").textContent = `${formatNumber(minutesSaved)} min`;
    result("grossValue").textContent = formatMoney(grossValue, values.currency);
    result("monthlyCost").textContent = formatMoney(monthlyCost, values.currency);
    result("netBenefit").textContent = formatMoney(netBenefit, values.currency);
    result("breakEven").textContent = breakEven === null ? "No alcanzable" : `${formatNumber(breakEven)} unidades/mes`;

    if (minutesSaved <= 0) {
      status.textContent = "El flujo no ahorra tiempo por unidad; el punto de equilibrio no es alcanzable con estos datos.";
    } else if (netBenefit > 0) {
      status.textContent = "El beneficio neto estimado es positivo. Confirma calidad, demanda y riesgos antes de decidir.";
    } else if (netBenefit === 0) {
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
      ["fecha_de_revision_de_la_calculadora", "2026-08-12", "AAAA-MM-DD"],
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
    link.download = "calculo-costo-real-ia-2026-08-12.csv";
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
    const selected = new Set(kinds.filter((input) => input.checked).map((input) => input.value));

    if (selected.size === 0) {
      result.dataset.level = "empty";
      level.textContent = "Falta clasificar";
      title.textContent = "Selecciona al menos una categoría";
      message.textContent = "No introduzcas contenido real en este formulario.";
      renderActions(["Describe la entrada por categorías, sin copiar datos."]);
      return;
    }

    if (selected.has("secret") || selected.has("regulated")) {
      result.dataset.level = "stop";
      level.textContent = "Detener y escalar";
      title.textContent = "No pegues esta información";
      message.textContent = "La entrada incluye secretos técnicos o una categoría que necesita revisión especializada.";
      renderActions([
        "Usa el canal y la persona responsable definidos por tu organización.",
        "Si ya compartiste una credencial, revócala y reporta el incidente.",
        "Prueba el flujo con datos ficticios mientras se evalúa el uso real.",
      ]);
      return;
    }

    if (selected.has("personal") || selected.has("confidential")) {
      result.dataset.level = "minimize";
      level.textContent = "Minimizar y autorizar";
      title.textContent = approvedEnvironment.checked ? "Reduce los datos antes de continuar" : "No uses este entorno todavía";
      message.textContent = "La aprobación de una herramienta no elimina la necesidad de retirar campos y limitar el propósito.";
      renderActions([
        "Elimina identificadores y campos que no cambian el resultado.",
        "Confirma que el plan y esta categoría de datos estén aprobados.",
        externalAction.checked ? "Exige revisión humana antes de publicar, decidir o ejecutar." : "Registra propósito, responsable y fecha de revisión.",
      ]);
      return;
    }

    if (selected.has("internal") || !approvedEnvironment.checked) {
      result.dataset.level = "caution";
      level.textContent = "Comprobar el entorno";
      title.textContent = "Continúa solo en una herramienta aprobada";
      message.textContent = "La información no pública necesita una decisión explícita sobre cuenta, plan, retención y acceso.";
      renderActions([
        "Confirma herramienta, plan, cuenta y controles de acceso.",
        "Usa una muestra mínima y evita conectores innecesarios.",
        externalAction.checked ? "Añade revisión humana antes de cualquier acción externa." : "Conserva evidencia de la aprobación.",
      ]);
      return;
    }

    result.dataset.level = "continue";
    level.textContent = "Continuar con límites";
    title.textContent = "La entrada parece pública o ficticia";
    message.textContent = "Todavía debes comprobar fuente, licencia, datos incrustados y la exactitud de la salida.";
    renderActions([
      "Confirma que no existan comentarios, metadatos o identificadores ocultos.",
      "Mantén la muestra necesaria para la tarea.",
      externalAction.checked ? "Revisa la salida antes de publicarla o ejecutar acciones." : "Documenta el alcance de la prueba.",
    ]);
  };

  dataAssessment.addEventListener("change", renderAssessment);
  renderAssessment();
}
