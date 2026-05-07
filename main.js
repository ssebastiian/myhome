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
    const noun = total === 1 ? "articulo" : "articulos";
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
