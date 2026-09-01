const DragonBallAPI = (function () {
  const BASE_URL = "https://dragonball-api.com/api";
  const PAGE_SIZE = 10;
  let _filterOptionsCache = null;

  function mapChar(c) {
    return {
      id: c.id,
      name: c.name,
      race: c.race || "Desconocida",
      gender: c.gender || "Desconocido",
      affiliation: c.affiliation || "Sin afiliación",
      price: c.ki || "1000",
      description: c.description || "Sin descripción disponible.",
      image: c.image,
      transformations: Array.isArray(c.transformations)
      ? c.transformations.map((t) => ({
          id: t.id,
          name: t.name,
          image: t.image,
          price: t.ki || "1000",
        }))
      : [],
    };
  }

  /* Preparar la Query */
  function buildQuery(params) {
    const u = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        u.set(key, value);
      }
    });
    const q = u.toString();
    return q ? `?${q}` : "";
  }

  /* Traer metadata en todas las respuestas */
  function normalizeList(data) {
    if (Array.isArray(data)) { // Corregido: isArray con 'i' minúscula
      return { items: data, meta: null };
    }
    return { items: data.items || [], meta: data.meta || null };
  }

  async function fetchChars(opts = {}) {
  const page = opts.page || 1;
  const limit = PAGE_SIZE;

  const query = buildQuery({
    name: opts.name,
    race: opts.race,
    gender: opts.gender,
    affiliation: opts.affiliation,
    page: page,
    limit: limit,
  });

  try {
    const response = await fetch(`${BASE_URL}/characters${query}`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    if (Array.isArray(data)) {
      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / limit) || 1;

      // Paginar manualmente el arreglo
      const startIndex = (page - 1) * limit;
      const paginatedItems = data.slice(startIndex, startIndex + limit);

      return {
        items: paginatedItems.map(mapChar),
        page: page,
        totalPages: totalPages,
        totalItems: totalItems,
        hasNext: page < totalPages,
      };
    }

    // SI LA API DEVUELVE UN OBJETO PAGINADO NORMAL ({ items, meta }):
    const { items, meta } = normalizeList(data);

    return {
      items: items.map(mapChar),
      page: (meta && meta.currentPage) || page,
      totalPages: meta ? meta.totalPages : null,
      totalItems: meta ? meta.totalItems : null,
      hasNext: meta ? meta.currentPage < meta.totalPages : items.length === limit,
    };

  } catch (error) {
    throw new Error("Error al conectar la API: " + error.message);
  }
}

  async function fetchProductById(id) {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}`);

      if (response.status === 404) return null;
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      return data ? mapChar(data) : null;
    } catch (error) {
      throw new Error("No se pudo contactar a la API: " + error.message);
    }
  }

  // 1. Exportación pública necesaria para main.js
  return {
    fetchChars,
    fetchProductById,
    PAGE_SIZE,
  };
})();