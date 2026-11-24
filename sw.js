/* SCS SUIT — শুধু অ্যাপের খোলস ক্যাশ করে; প্রতিটি অ্যাপের ডাটা সবসময় লাইভ আসে।
   apps.js বা অন্য ফাইল বদলালে VERSION ১ বাড়ান। */
var VERSION = 1;
var CACHE = 'scs-suit-v' + VERSION;
var SHELL = ['./', './index.html', './apps.js', './manifest.webmanifest', './logo.png', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
/* নেটওয়ার্ক আগে, না পেলে ক্যাশ — তাই apps.js বদলালে অনলাইনে সাথে সাথে নতুন তালিকা আসে */
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(function (r) { if (r.ok) { var cp = r.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, cp); }); } return r; }).catch(function () { return caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || caches.match('./index.html'); }); }));
});
