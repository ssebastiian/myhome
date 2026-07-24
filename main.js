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
