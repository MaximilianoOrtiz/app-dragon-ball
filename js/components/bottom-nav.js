const BottomNav  = {
  render: (selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    {
      element.innerHTML = `
        <nav class="bottom-nav">
          <a href="#" class="bottom-nav__item">
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

          <a href="#" class="bottom-nav__item">
              <span class="bottom-nav__icon">
                  <!-- Buscar -->
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="10.5" cy="10.5" r="6.5"></circle>
                      <path d="M16 16l5 5"></path>
                  </svg>
              </span>
              <span class="bottom-nav__text">Buscar</span>
          </a>

          <a href="#" class="bottom-nav__item">
              <span class="bottom-nav__icon">
                  <!-- Deseos -->
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.8 8.7c0 5.5-8.8 11-8.8 11S3.2 14.2 3.2 8.7
                              C3.2 5.6 5.3 4 7.8 4
                              c1.7 0 3.3.9 4.2 2.3
                              C12.9 4.9 14.5 4 16.2 4
                              c2.5 0 4.6 1.6 4.6 4.7z">
                      </path>
                  </svg>
              </span>
              <span class="bottom-nav__text">Deseos</span>
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