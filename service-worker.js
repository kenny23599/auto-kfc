const cacheName = 'your-app-cache';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'app.css',
        'app.js',
        'kasu.png'
      ]);
    })
  );
});