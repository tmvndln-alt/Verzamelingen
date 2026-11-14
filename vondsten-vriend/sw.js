// Bewaart de app zelf zodat hij ook zonder internet opent (de AI heeft wel internet nodig).
const NAAM = 'vondsten-v1';
const BESTANDEN = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(NAAM).then(c => c.addAll(BESTANDEN))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== NAAM).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  // eerst netwerk (zodat updates doorkomen), anders de bewaarde versie
  e.respondWith(fetch(e.request).then(r => { const k = r.clone(); caches.open(NAAM).then(c => c.put(e.request, k)); return r; }).catch(() => caches.match(e.request)));
});
