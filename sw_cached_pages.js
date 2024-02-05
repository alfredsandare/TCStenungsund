const cacheName = 'V1'; //skapa en "box för cacheing"
const cacheAssets = ['index.html', '/script.js']; // infoga filerna man vill chahe

self.addEventListener('install', e => {
	// börja med installera efter man har registerat sw
	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Service Worker caching files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())
	);
});

//activated event
self.addEventListener('activate', e => {
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

//fetch
self.addEventListener('fetch', e => {
	console.log('Fetching');
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

//////////Gjort av alexander
