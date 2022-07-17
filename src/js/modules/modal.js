const modal = document.querySelector('.modal'),
	setTimeoutModal = 5000,
	timeoutShowModal = setTimeout(showModal, setTimeoutModal);

function showModal() {
	modal.classList.remove('hide');
	modal.classList.add('show', 'fadeModal');
	document.body.style.overflow = 'hidden';
	clearTimeout(timeoutShowModal);
	window.removeEventListener('scroll', showModalScrollBottom);
}

function hideModal() {
	document.body.style.overflow = '';
	modal.classList.remove('show', 'fadeModal');
	modal.classList.add('hide');
}

function showModalScrollBottom() {
	if (
		window.pageYOffset + document.body.clientHeight >=
		document.documentElement.scrollHeight
	) {
		showModal();
	}
}

export { showModal, hideModal, showModalScrollBottom };
