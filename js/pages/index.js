document.addEventListener("DOMContentLoaded", () => {
    // Renderizo el Hero
    Hero.render('#site-hero');

  //Busco y renderizo los ultimos productos visitados
  const containerHistoryCard = document.getElementById("results-container");
  const views = recentlyViewedUtil.getViews();
  renderHistoyCard(views, containerHistoryCard);

  //Renderizo el componente beneficios
  Benefits.render('#site-benefits')
});

function renderHistoyCard(views, container) {
  if (!views || views.length === 0) {
    container.innerHTML = `<p class="empty-state">Todavía no viste ninguna figura.</p>`;
    return;
  }
  // Dibujar personajes en el HTML usando el componente Card
    Card.renderList(views, "#results-container");
}