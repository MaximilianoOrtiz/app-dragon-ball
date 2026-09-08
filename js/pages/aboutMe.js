document.addEventListener("DOMContentLoaded", () => {
  initMap();
});

async function initMap() {
  const address = "Av. Calchaquí 6200, Florencio Varela, Buenos Aires, Argentina";
  const fallbackCoords = [-34.7936, -58.2716]; // aprox. Florencio Varela, por si falla la geocodificación

  const map = LeafletAPI.createMap("map");

  try {
    const coords = await LeafletAPI.geocodeAddress(address);
    LeafletAPI.setMarker(map, coords, "Universidad Nacional Arturo Jauretche");
  } catch (error) {
    console.warn(error.message);
    LeafletAPI.setMarker(map, fallbackCoords, "Universidad Nacional Arturo Jauretche (ubicación aproximada)");
  }
}