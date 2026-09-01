let currentPage = 1;
document.addEventListener("DOMContentLoaded", () => {

  // 1. Detecta si la búsqueda vino desde la barra de navegación (URL: buscar.html?name=Goku)
  const urlParams = new URLSearchParams(window.location.search);
  const nameFromUrl = urlParams.get("name");

  if (nameFromUrl) {
    document.getElementById("input-name").value = nameFromUrl;
  }

  // 2. Escucha el botón de búsqueda del formulario
  const form = document.getElementById("search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentPage = 1; // Reinicia a la página 1 en cada nueva búsqueda
    executeSearch();
  });

  // 3. Botones de paginación
  document.getElementById("btn-prev").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      executeSearch();
    }
  });

  document.getElementById("btn-next").addEventListener("click", () => {
    currentPage++;
    executeSearch();
  });

  // 4. Ejecuta una búsqueda inicial
  executeSearch();
});


async function executeSearch() {
  const statusDiv = document.getElementById("status-message");
  const resultsDiv = document.getElementById("results-container");

  // Captura los valores elegidos en el formulario
  const filters = {
    name: document.getElementById("input-name").value.trim(),
    race: document.getElementById("select-race").value,
    gender: document.getElementById("select-gender").value,
    page: currentPage,
  };

  statusDiv.innerText = "Cargando personajes...";
  resultsDiv.innerHTML = "";

  try {
    // Llamada a la API
    const response = await DragonBallAPI.fetchChars(filters);

    statusDiv.innerText = "";

    if (!response.items || response.items.length === 0) {
      statusDiv.innerText = "No se encontraron personajes.";
      updatePaginationControls(false, false);
      return;
    }

    // Dibujar personajes en el HTML
    renderCharacters(response.items);

    // Actualizar estado de los botones Anterior / Siguiente
    updatePaginationControls(currentPage > 1, response.hasNext);

  } catch (error) {
    console.error(error);
    statusDiv.innerText = "Error con la API.";
  }
}

function renderCharacters(characters) {
  const resultsDiv = document.getElementById("results-container");

  // Genera un bloque HTML básico para cada personaje
  const html = characters.map((c) => `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <img src="${c.image}" alt="${c.name}" width="80" />
      <h3>${c.name}</h3>
      <p>Raza: ${c.race} | Género: ${c.gender}</p>
      <p>Precio simulado: $${c.price}</p>
    </div>
  `).join("");

  resultsDiv.innerHTML = html;
}

function updatePaginationControls(hasPrev, hasNext) {
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const pageInfo = document.getElementById("page-info");

  btnPrev.disabled = !hasPrev;
  btnNext.disabled = !hasNext;
  pageInfo.innerText = `Página ${currentPage}`;
}