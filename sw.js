const CACHE = 'metal-walking-v14';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/images/takasaki_action.jfif',
  './assets/images/zakk_stand.jfif',
  './assets/images/zakk_action.jfif',
  './assets/images/angus_stand.jfif',
  './assets/images/angus_action.jfif',
  './assets/images/ynge_stand.jfif',
  './assets/images/ynge_action.jfif',
  './assets/images/slash_stand.jfif',
  './assets/images/slash_action.jfif',
  './assets/images/eddie_stand.webp',
  './assets/images/eddie_action.webp',
  './assets/images/marty_stand.webp',
  './assets/images/marty_action.webp',
  './assets/images/hide_stand.jfif',
  './assets/images/hide_action.jfif',
  './assets/images/bucket_stand.jfif',
  './assets/images/lemmy_stand.webp',
  './assets/images/lemmy_action.webp',
  './assets/images/vai_stand.webp',
  './assets/images/vai_action.webp',
  './assets/images/iommi_stand.jfif',
  './assets/images/oz_throne.jfif',
  './assets/images/paul_stand.webp',
  './assets/images/paul_action.webp',
  './assets/images/petrucci_stand.webp',
  './assets/images/petrucci_action.webp',
  './assets/images/mick_stand.webp',
  './assets/images/mick_action.webp',
  './assets/images/dave_stand.webp',
  './assets/images/dave_action.webp',
  './assets/images/joe_stand.webp',
  './assets/images/joe_action.webp',
  './assets/images/schenker_stand.webp',
  './assets/images/schenker_action.webp',
  './assets/images/zappa_stand.webp',
  './assets/images/zappa_action.webp',
  './assets/images/angelo_stand.webp',
  './assets/images/angelo_action.webp',
  './assets/images/mateus_stand.webp',
  './assets/images/mateus_action.webp',
  './assets/images/nuno_stand.webp',
  './assets/images/nuno_action.jfif',
  './assets/images/page_stand.jfif',
  './assets/images/page_action.jfif',
  './assets/images/jimi_stand.jfif',
  './assets/images/jimi_action.jfif',
  './assets/images/mika_stand.jfif',
  './assets/images/mika_action.jfif',
  './assets/images/tak_stand.jfif',
  './assets/images/tak_action.jfif',
  './assets/images/beach_stand.jfif',
  './assets/images/beach_action.jfif',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
