const CACHE_NAME = 'app-shell-v1'; 

// Detecta si estás en GitHub Pages (/app-dragon-ball/) o en Localhost Live Server (/)
const isGitHub = self.location.pathname.startsWith('/app-dragon-ball');
const BASE = isGitHub ? '/app-dragon-ball' : '';

const RECURSOS_SHELL = [ 
  `${BASE}/`, 
  `${BASE}/index.html`,
  `${BASE}/search.html`,
  `${BASE}/details.html`,
  `${BASE}/shoppingCart.html`,
  `${BASE}/history.html`,
  `${BASE}/aboutMe.html`,
  `${BASE}/assets/images/dragon-ball.png`,
  `${BASE}/assets/images/icon-192.png`,
  `${BASE}/assets/images/icon-512.png`,
  `${BASE}/css/styles.css`,
  `${BASE}/js/api/api.js`,
  `${BASE}/js/api/apiLeaflet.js`,
  `${BASE}/js/components/cart/cart-header.js`,
  `${BASE}/js/components/cart/cart-item.js`,
  `${BASE}/js/components/cart/cart.js`,
  `${BASE}/js/components/cart/order-summary.js`,
  `${BASE}/js/components/cart/quantity-selector.js`,
  `${BASE}/js/components/home/benefits.js`,
  `${BASE}/js/components/home/hero.js`,
  `${BASE}/js/components/order/order-modal.js`,
  `${BASE}/js/components/bottom-nav.js`,
  `${BASE}/js/components/card.js`,
  `${BASE}/js/components/footer.js`,
  `${BASE}/js/components/header.js`,
  `${BASE}/js/pages/aboutMe.js`,
  `${BASE}/js/pages/details.js`,
  `${BASE}/js/pages/history.js`,
  `${BASE}/js/pages/index.js`,
  `${BASE}/js/pages/search.js`,
  `${BASE}/js/pages/shoppingCart.js`,
  `${BASE}/js/utils/local-storage-util.js`,
  `${BASE}/js/utils/recently-viewed-util.js`,
  `${BASE}/js/utils/router.js`,
  `${BASE}/js/validators/form-validator.js`,
  `${BASE}/js/validators/order-form-rules.js`,
  `${BASE}/js/validators/validation-rules.js`,
  `${BASE}/js/main.js`,
  `${BASE}/js/pwa-init.js`,
  `${BASE}/manifest.json`
];

// ==========================================
// 1. EVENTO INSTALL: Guardar archivos en caché
// ==========================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Guardando recursos shell en caché...');
      for (const resource of RECURSOS_SHELL) {
        try {
          await cache.add(resource);
        } catch (error) {
          console.warn(`[SW] No se pudo guardar en caché: ${resource}`, error);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// ==========================================
// 2. EVENTO ACTIVATE: Limpiar versiones viejas
// ==========================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Eliminando caché antigua:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ==========================================
// 3. EVENTO FETCH: Interceptar y responder desde caché
// ==========================================
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el archivo está en caché, lo devuelve. Si no, intenta buscarlo en la red.
      return cachedResponse || fetch(event.request);
    })
  );
});