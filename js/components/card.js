const Card = {
  // Crea y devuelve el elemento DOM de una tarjeta (no la inserta en el DOM).
  // options.linkable (default true): si es false, la imagen/info no redirige a details.html
  // (útil para mostrar transformaciones dentro de la propia página de details).
  createCard(item, options = {}) {
    const { linkable = true } = options;

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card");
    tarjeta.dataset.id = item.id;

    const infoTag = linkable ? "a" : "div";
    const hrefAttr = linkable ? `href="./details.html?id=${item.id}"` : "";

    tarjeta.innerHTML = `
      <${infoTag} class="card__link" ${hrefAttr}>
        <div class="card__media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="card__body">
          <p class="card__tags">
            <span class="card__tag card__tag--race">${item.race}</span>
            <span class="card__tag card__tag--gender">${item.gender}</span>
          </p>
          <h3 class="card__title">${item.name}</h3>
          <p class="card__price">$${item.price}</p>
        </div>
      </${infoTag}>
      <button class="card__cta" type="button">Agregar al carrito</button>
    `;

    const btnCta = tarjeta.querySelector(".card__cta");
    btnCta.addEventListener("click", (e) => {

      //Se agrega el producto al carrito en localStorage
      localStorageUtil.addProduct(item);

      e.preventDefault();
      btnCta.classList.add("card__cta--added");
      btnCta.textContent = "Agregado ✓";
    });

    return tarjeta;
  },

  // options se propaga a createCard
  renderList(items, selectorContenedor, options = {}) {
    const contenedor = document.querySelector(selectorContenedor);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (!items || items.length === 0) {
      contenedor.innerHTML = `<p class="empty-state">No se encontraron resultados.</p>`;
      return;
    }

    items.forEach((item) => contenedor.appendChild(Card.createCard(item, options)));
  },
};