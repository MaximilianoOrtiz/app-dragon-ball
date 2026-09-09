document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("history-list");
  const views = recentlyViewedUtil.getViews();

  renderHistory(views, container);
});

function renderHistory(views, container) {
  if (!views || views.length === 0) {
    container.innerHTML = `<p class="empty-state">Todavía no viste ninguna figura.</p>`;
    return;
  }

  container.innerHTML = views.map((item) => `
    <a href="./details.html?id=${item.id}" class="history-item">
      <div class="history-item__media">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="history-item__info">
        <h3 class="history-item__name">${item.name}</h3>
        <span class="history-item__race">${item.race}</span>
      </div>
      <span class="history-item__link">Ver →</span>
    </a>
  `).join("");
}