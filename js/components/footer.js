document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
});

function renderFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  container.innerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; ${new Date().getFullYear()} Proyecto integrador</p>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="/js/pages/searchResult.html">Buscar</a></li>
          <li><a href="about.html">About Me</a></li>
        </ul>
      </div>
    </footer>
  `;
}