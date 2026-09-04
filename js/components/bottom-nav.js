const BottomNav  = {
  render: (selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const isActive = (page) => currentPage === page ? "bottom-nav__item--active" : "";

    {
      element.innerHTML = `
        <nav class="bottom-nav">
          <a href="./index.html" class="bottom-nav__item ${isActive("index.html")}">
              <span class="bottom-nav__icon">
                  <!-- Inicio -->
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3 10.5L12 3l9 7.5"></path>
                      <path d="M5.5 9.5V21h13V9.5"></path>
                      <path d="M9.5 21v-6h5v6"></path>
                  </svg>
              </span>
              <span class="bottom-nav__text">Inicio</span>
          </a>

          <a href="./search.html" class="bottom-nav__item ${isActive("search.html")}">
                <span class="bottom-nav__icon">
                    <!-- Catálogo -->
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                    </svg>
                </span>

                 <span class="bottom-nav__text">Catálogo</span>
            </a>

          <a href="./shoppingCart.html" class="bottom-nav__item ${isActive("shoppingCart.html")}">
            <span class="bottom-nav__icon">
                <!-- Carrito -->
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6"></path>
                    <circle cx="10" cy="20" r="1.5"></circle>
                    <circle cx="18" cy="20" r="1.5"></circle>
                </svg>
            </span>
            <span class="bottom-nav__text">Carrito</span>
            </a>
          

          <a href="#" class="bottom-nav__item">
              <span class="bottom-nav__icon">
                  <!-- Historial -->
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="13" r="7.5"></circle>
                      <path d="M12 13V8.5"></path>
                      <path d="M12 13l3 2"></path>
                      <path d="M12 2v2"></path>
                  </svg>
              </span>
              <span class="bottom-nav__text">Historial</span>
          </a>

          <a href="#" class="bottom-nav__item">
              <span class="bottom-nav__icon">
                  <!-- Contacto -->
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <path d="M4 7l8 6 8-6"></path>
                  </svg>
              </span>
              <span class="bottom-nav__text">Contacto</span>
          </a>
        </nav>
      `;
        }
    }
};