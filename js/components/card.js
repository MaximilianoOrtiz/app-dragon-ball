const Card = {
  // Crea y devuelve el elemento DOM de una tarjeta (no la inserta en el DOM).
  createCard(item) {
    const tarjeta = document.createElement("a");
    tarjeta.classList.add("card");
    tarjeta.dataset.id = item.id;
    tarjeta.href = `details.html?id=${item.id}`;
 
    tarjeta.innerHTML = `
      <div class="card__media">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card__body">
        <p class="card__tags">${item.race} · ${item.gender}</p>
        <h3 class="card__title">${item.name}</h3>
        <p class="card__price">$${item.price}</p>
      </div>
    `;
 
    return tarjeta;
  },

  renderList(items, selectorContenedor) {
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;
 
    contenedor.innerHTML = "";
 
    if (!items || items.length === 0) {
      contenedor.innerHTML = `<p class="empty-state">No se encontraron resultados.</p>`;
      return;
    }
 
    items.forEach((item) => contenedor.appendChild(Card.createCard(item)));
  },
};