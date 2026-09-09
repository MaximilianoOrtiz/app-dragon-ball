const LeafletAPI = (function () {
  const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
  const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

  /* Convierte una dirección de texto en coordenadas [lat, lng] usando Nominatim (OpenStreetMap) */
  async function geocodeAddress(address) {
    const url = `${NOMINATIM_URL}?format=json&q=${encodeURIComponent(address)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const results = await response.json();
      if (!results || results.length === 0) throw new Error("Dirección no encontrada");

      return [parseFloat(results[0].lat), parseFloat(results[0].lon)];
    } catch (error) {
      throw new Error("No se pudo geocodificar la dirección: " + error.message);
    }
  }

  /* Crea el mapa de Leaflet en el contenedor indicado, con el tile layer de OpenStreetMap */
  function createMap(containerId) {
    const map = L.map(containerId);
    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 19,
    }).addTo(map);
    return map;
  }

  /* Centra el mapa en las coordenadas dadas y agrega un marcador con popup */
  function setMarker(map, coords, popupText) {
    map.setView(coords, 16);
    L.marker(coords).addTo(map).bindPopup(popupText).openPopup();
  }

  return {
    geocodeAddress,
    createMap,
    setMarker,
  };
})();