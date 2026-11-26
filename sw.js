// Minimal PWA Service Worker enabling native Android/Chrome installation without aggressive stale caching
self.addEventListener('install', (event) => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
	// Pass-through network strategy so GitHub Pages updates immediately
});
