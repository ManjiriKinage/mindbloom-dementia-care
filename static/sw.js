/**
 * MindBloom Offline Service Worker
 * Ensures reliable local gameplay and asset caching in low-connectivity NER rural hills.
 */

const CACHE_NAME = 'mindbloom-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/static/index.html',
  '/static/css/style.css',
  '/static/js/app.js',
  '/static/js/voice.js',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Noto+Sans+Devanagari:wght@600;700;800&family=Noto+Sans+Bengali:wght@600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[MindBloom SW] Pre-caching offline assets');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.warn('Cache addAll warning:', err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[MindBloom SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone and store good responses in cache
        if (response && response.status === 200 && event.request.method === 'GET') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/static/index.html');
          }
        });
      })
  );
});
