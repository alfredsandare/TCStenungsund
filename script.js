// testa att sw funkar och se till att webläsaren är kopatepl
if ('serviceWorker' in navigator) {
	console.log('Service Worker Supported');
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../sw_cached_pages.js')
			.then(reg => console.log('Service Worker Registered'))
			.catch(err => console.log('Service Worker Registration Failed'));
	});
} else {
	console.log('Service Worker is not supported');
}

//////////Gjort av alexander
