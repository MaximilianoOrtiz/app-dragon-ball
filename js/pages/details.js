document.addEventListener("DOMContentLoaded", async () => {
  const statusDiv = document.getElementById("status-message");
  const detailContainer = document.getElementById("character-detail");
  const transformationsSection = document.getElementById("transformations-section");
  const transformationsList = document.getElementById("transformations-list");

  // 1. Extraer el ID de la URL (?id=...)
  const urlParams = new URLSearchParams(window.location.search);
  const characterId = urlParams.get("id");

  if (!characterId) {
    statusDiv.innerText = "No se proporcionó un ID de Producto.";
    return;
  }

  statusDiv.innerText = "Cargando detalles del producto...";

  try {
    // 2. Obtener el personaje completo desde la API
    const character = await DragonBallAPI.fetchProductById(characterId);

    statusDiv.innerText = "";

    if (!character) {
      statusDiv.innerText = "El producto solicitado no existe.";
      return;
    }

    // 3. Renderizar la información
    renderDetail(character, detailContainer);

    // 4. Renderizar las transformaciones (Ediciones especiales)
    transformationsSection.style.display = "block";

    if (character.transformations && character.transformations.length > 0) {
      renderTransformations(character.transformations, transformationsList);
    } else {
      transformationsList.innerHTML = "<p>Este personaje no posee transformaciones o ediciones especiales.</p>";
    }

  } catch (error) {
    console.error(error);
    statusDiv.innerText = "Error al obtener los datos del personaje.";
  }
});

function renderDetail(item, container) {
  container.innerHTML = `
    <div class="detail-card">
      <div class="detail-card__media">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="detail-card__info">
        <h1>${item.name}</h1>
        <p class="detail-card__tags"><strong>Raza:</strong> ${item.race} | <strong>Género:</strong> ${item.gender}</p>
        <p><strong>Afiliación:</strong> ${item.affiliation}</p>
        <p class="detail-card__price"><strong>Precio:</strong> $${item.price}</p>
        <div class="detail-card__description">
          <h3>Descripción</h3>
          <p>${item.description}</p>
        </div>
      </div>
    </div>
  `;
}

function renderTransformations(list, container) {
  container.innerHTML = list.map((trans) => `
    <article class="transformation-card" style="border: 1px solid #ddd; padding: 10px; margin: 10px 0;">
      <img src="${trans.image}" alt="${trans.name}" width="100" loading="lazy" />
      <h4>${trans.name}</h4>
      <p><strong>Precio (Ki):</strong> $${trans.price}</p>
    </article>
  `).join("");
}