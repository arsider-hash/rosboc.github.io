const C='arsider-riddim-mobile-v431';
const A=['./','./index.html','./manifest.webmanifest','../riddim/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C&&k.startsWith('arsider-riddim-mobile')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')))}else{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))}});