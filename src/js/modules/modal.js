import { postData } from '../modules/server.js';

const modal = document.querySelector('.modal'),
	setTimeoutModal = 5000,
	timeoutShowModal = setTimeout(showModal, setTimeoutModal),
	prevModalDiaolog = document.querySelector('.modal__dialog'),
	modalTrigger = document.querySelectorAll('[data-modal]'),
	forms = document.querySelectorAll('form'),
	message = {
		loading: 'img/spinner.svg',
		success: 'Спасибо! Скоро мы с Вами свяжемся!',
		failure: 'Что-то пошло не так...',
	};

function showModal() {
	modal.classList.remove('hide');
	document.body.style.paddingRight = `${
		window.innerWidth - document.documentElement.clientWidth
	}px`;
	modal.classList.add('show', 'fadeModal');
	document.body.style.overflow = 'hidden';
	clearTimeout(timeoutShowModal);
	window.removeEventListener('scroll', showModalScrollBottom);
}

function hideModal() {
	document.body.style.overflow = '';
	modal.classList.remove('show', 'fadeModal');
	document.body.style.paddingRight = '';
	modal.classList.add('hide');
}

function showModalScrollBottom() {
	if (
		window.pageYOffset + document.documentElement.clientHeight >=
		document.documentElement.scrollHeight
	) {
		showModal();
	}
}

function showThanksModal(message) {
	prevModalDiaolog.classList.add('hide');
	showModal();

	const thanksModal = document.createElement('div');
	thanksModal.classList.add('modal__dialog');
	thanksModal.innerHTML = `
		<div class="modal__content">
			<form action="#">
				<div data-modalClose class="modal__close">&times;</div>
				<div class="modal__title">${message}</div>
			</form>
		</div>
	`;
	modal.append(thanksModal);
	setTimeout(() => {
		thanksModal.remove();
		hideModal();
		prevModalDiaolog.classList.remove('hide');
		prevModalDiaolog.classList.add('show');
	}, 4000);
}

function bindPostData(form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const statusMessage = document.createElement('img');
		statusMessage.src = message.loading;
		statusMessage.style.cssText = `
			display: block;
			margin: 0 auto;
		`;
		form.insertAdjacentElement('afterend', statusMessage);

		const formData = new FormData(form),
			json = JSON.stringify(Object.fromEntries(formData.entries()));

		postData('http://localhost:3000/requests', json)
			.then((data) => {
				console.log(data);
				showThanksModal(message.success);
				statusMessage.remove();
			})
			.catch(() => {
				showThanksModal(message.failure);
			})
			.finally(() => {
				form.reset();
				setTimeout(() => {
					hideModal();
				}, 2000);
			});
	});
}

export {
	showModal,
	hideModal,
	showModalScrollBottom,
	showThanksModal,
	message,
	modalTrigger,
	modal,
	forms,
	bindPostData,
};
