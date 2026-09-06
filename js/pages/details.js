document.addEventListener("DOMContentLoaded", async () => {
  const statusDiv = document.getElementById("status-message");
  const detailContainer = document.getElementById("character-detail");
  const transformationsSection = document.getElementById("transformations-section");
  const transformationsList = document.getElementById("transformations-list");

  //Extrae el ID de la URL (?id=...)
  const urlParams = new URLSearchParams(window.location.search);
  const characterId = urlParams.get("id");

  if (!characterId) {
    statusDiv.innerText = "No se proporcionó un ID de Producto.";
    return;
  }

  statusDiv.innerText = "Cargando detalles del producto...";

  try {
    //Obtiene el personaje completo desde la API
    const character = await DragonBallAPI.fetchProductById(characterId);
    statusDiv.innerText = "";

    if (!character) {
      statusDiv.innerText = "El producto solicitado no existe.";
      return;
    }

    // 3. Renderiza la información
    renderDetail(character, detailContainer);

    // 4. Renderiza las transformaciones (Ediciones especiales)
    transformationsSection.style.display = "block";

    if (character.transformations && character.transformations.length > 0) {
      renderTransformations(character, character.transformations, transformationsList);
    } else {
      transformationsList.innerHTML = "<p>No posee ediciones especiales.</p>";
    }

  } catch (error) {
    console.error(error);
    statusDiv.innerText = "Error al obtener los datos del personaje.";
  }
});

function buildTransformationId(characterId, transformationID) {
  const paddedTransfID = String(transformationID).padStart(4,"0");
  return Number(`${characterId}${paddedTransfID}`);
}

function renderDetail(item, container) {
  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-card__media">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="detail-card__info">
        <h1 class="details-card__title">${item.name}</h1>
        <p class="detail-card__tags">
          <span class="card__tag card__tag--race">${item.race}</span> 
          <span class="card__tag card__tag--gender">${item.gender}</span>
        </p>
        <p class="detail-card__affiliation"><strong>Afiliación:</strong> ${item.affiliation}</p>
        <p class="detail-card__price">$${item.price}</p>
        <button class="detail-card__cta" type="button" id="btn-add-base">
          Agregar al carrito
        </button>
        <div class="detail-card__description">
          <h3>Descripción</h3>
          <p>${item.description}</p>
        </div>
      </div>
    </div>
  `;

const btnAddBase = container.querySelector("#btn-add-base");
btnAddBase.addEventListener("click", () => {
  localStorageUtil.addProduct({
    id:item.id,
    name:item.name,
    image:item.image,
    category:"Figura base",
    price:item.price,
  });
  btnAddBase.textContent = "Agregado ✓";
  btnAddBase.classList.add("detail-card__cta--added")
});

}

function renderTransformations(character, list, container) {
  container.innerHTML = list.map((trans) => `
    <article class="transformation-card">
      <div class="transformation-card__media">
        <img src="${trans.image}" alt="${trans.name}" loading="lazy">
      </div>
      <div class="transformation-card__body">
        <span class="transformation-card__badge">Edición especial</span>
        <h4 class="transformation-card__name">${trans.name}</h4>
        <p class="transformation-card__price">$${trans.price}</p>
        <button class="transformation-card__cta" type="button">
          Agregar al carrito
        </button>
      </div>
    </article>
  `).join("");

    container.querySelectorAll(".transformation-card").forEach((card, index) => {
    const trans = list[index];
    const btn = card.querySelector(".transformation-card__cta");

    btn.addEventListener("click", () => {
      localStorageUtil.addProduct({
        id: buildTransformationId(character.id, trans.id),
        name: `${character.name} - ${trans.name}`,
        image: trans.image,
        category: "Edición especial",
        price: trans.price,
      });
      btn.textContent = "Agregado ✓";
      btn.classList.add("transformation-card__cta--added");
    });
  });
}