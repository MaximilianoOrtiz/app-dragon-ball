// ==========================================
// 1. REGISTRO DEL SERVICE WORKER
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Si la URL incluye '/app-dragon-ball', usa esa subcarpeta (GitHub Pages). Si no, usa la raíz '/' (Localhost/Live Server).
    const isGitHubPages = window.location.pathname.includes('/app-dragon-ball');
    const swPath = isGitHubPages ? '/app-dragon-ball/sw.js' : '/sw.js';
    const swScope = isGitHubPages ? '/app-dragon-ball/' : '/';

    navigator.serviceWorker.register(swPath, { scope: swScope })
      .then((registration) => {
        console.log('[PWA] Service Worker registrado exitosamente en:', registration.scope);
      })
      .catch((error) => {
        console.error('[PWA] Error al registrar el Service Worker:', error);
      });
  });
}

// ==========================================
// 2. GESTIÓN DEL BOTÓN DE INSTALACIÓN
// ==========================================
let deferredPrompt;
// Asegúrate de tener un botón en tu HTML con id="pwa-install-btn" (opcional)
const installBtn = document.getElementById('pwa-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  // Evitar que Chrome muestre el cartel por defecto inmediatamente
  e.preventDefault();
  deferredPrompt = e;

  // Si existe el botón en el DOM, hacer visible la opción de instalar
  if (installBtn) {
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', async () => {
      installBtn.style.display = 'none';
      if (!deferredPrompt) return;

      // Mostrar el prompt de instalación al usuario
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] El usuario aceptó instalar la app');
      } else {
        console.log('[PWA] El usuario canceló la instalación');
      }
      deferredPrompt = null;
    });
  }
});

// ==========================================
// 3. EVENTO DE INSTALACIÓN COMPLETADA
// ==========================================
window.addEventListener('appinstalled', () => {
  console.log('[PWA] La aplicación fue instalada en el dispositivo.');
  if (installBtn) installBtn.style.display = 'none';
  deferredPrompt = null;
});

// ==========================================
// 4. DETECCIÓN DE CONEXIÓN (ONLINE / OFFLINE)
// ==========================================
window.addEventListener('online', () => {
  console.log('[PWA] Conexión restablecida.');
});

window.addEventListener('offline', () => {
  console.log('[PWA] Modo offline activado.');
});