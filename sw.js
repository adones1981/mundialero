// ============================================
// SERVICE WORKER — Mundial Stats PWA
// Estrategia: Cache First para assets estáticos,
//             Network First para worldcups.json
// ============================================

const CACHE_NAME = 'mundial-stats-v2';
const STATIC_CACHE = 'mundial-static-v2';

// Recursos a cachear inmediatamente al instalar
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/worldcups.json'
];

// CDNs externos a cachear cuando se visiten
const CDN_CACHE_PATTERNS = [
  'cdn.jsdelivr.net',
  'cdnjs.cloudflare.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

// ---- INSTALL ----
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching assets...');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ---- ACTIVATE ----
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== STATIC_CACHE)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ---- FETCH ----
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // worldcups.json → Network First (datos más recientes), fallback a cache
  if (url.pathname.endsWith('worldcups.json')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // CDNs externos → Cache First (no cambian)
  const isCDN = CDN_CACHE_PATTERNS.some(pattern => url.hostname.includes(pattern));
  if (isCDN) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          const cloned = response.clone();
          caches.open(STATIC_CACHE).then(cache => cache.put(event.request, cloned));
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Todo lo demás (HTML, etc.) → Cache First, fallback Network
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        return response;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
