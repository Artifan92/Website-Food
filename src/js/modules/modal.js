const modal = document.querySelector('.modal');
function showModal() {
	modal.classList.remove('hide');
	modal.classList.add('show', 'fadeModal');
	document.body.style.overflow = 'hidden';
}

function hideModal() {
	document.body.style.overflow = '';
	modal.classList.remove('show', 'fadeModal');
	modal.classList.add('hide');
}

export { showModal, hideModal };
