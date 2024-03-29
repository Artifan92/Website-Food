'use strict';
function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

async function postData(url, data) {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: data,
	});

	return await res.json();
}

async function getResource(url) {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could notfetch ${url}, status ${res.status}`);
	}

	return await res.json();
}

export { postData, getResource, getZero };
