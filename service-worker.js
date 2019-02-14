var cacheName = 'noelsnews-16';
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/css/styles.css',
  '/images/favicon.ico',
  '/audio/19yearssenior.mp3',
  '/audio/blahhh.mp3',
  '/audio/getloose.mp3',
  '/audio/hah.mp3',
  '/audio/noelsnews.mp3',
  '/audio/rightshower.mp3',
  '/audio/thatsafact.mp3',
  '/audio/wellyoungfella.mp3',
  '/audio/creamypyyynts.mp3',
  '/audio/driveit.mp3',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
