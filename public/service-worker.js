const CACHE_NAME = "my-app";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/static/js/bundle.js",
  "/ws",
  "/logo192.png",
  "/camera",
  "/icon64.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
