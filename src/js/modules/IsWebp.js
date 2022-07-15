const isWebp = () => {
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 1);
		};
		webP.src =
			'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
	}
	testWebp(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
};

export default isWebp;
