document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  setupNavbarEvents();
});

function renderNavbar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  // Detecta la página actual
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  container.innerHTML = `
    <nav class="navbar">
      <div class="nav-header">
        <button id="nav-toggle" class="nav-toggle" aria-label="Abrir menú">
          ☰
        </button>
      </div>

      <div id="nav-content" class="nav-content">
        <form id="nav-search-form" class="nav-search">
          <input 
            type="text" 
            id="nav-search-input" 
            placeholder="Buscar personaje..." 
            autocomplete="off"
          />
          <button type="submit" aria-label="Buscar"></button>
        </form>

        <ul class="nav-links">
          <li><a href="../../index.html" class="${currentPage === "index.html" || currentPage === "" ? "active" : ""}">Home</a></li>
          <li><a href="/js/pages/searchResult.html" class="${currentPage === "buscar.html" ? "active" : ""}">Buscar</a></li>
          <li><a href="historial.html" class="${currentPage === "historial.html" ? "active" : ""}">Historial</a></li>
          <li><a href="carrito.html" class="${currentPage === "carrito.html" ? "active" : ""}">Carrito</a></li>
          <li><a href="about.html" class="${currentPage === "about.html" ? "active" : ""}">About Me</a></li>
        </ul>
      </div>
    </nav>
  `;
}

function setupNavbarEvents() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navContent = document.getElementById("nav-content");

  if (toggleBtn && navContent) {
    toggleBtn.addEventListener("click", () => {
      navContent.classList.toggle("is-open");
    });
  }

  const searchForm = document.getElementById("nav-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("nav-search-input");
      const query = input ? input.value.trim() : "";
      if (query) {
        window.location.href = `searchResult.html?name=${encodeURIComponent(query)}`;
      }
    });
  }
}