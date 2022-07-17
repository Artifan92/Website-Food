'use strict';
import {
	hideTabContent,
	showTabContent,
	changeTabContent,
} from './modules/tabs.js';

import setClock from './modules/timer.js';

import {
	showModal,
	hideModal,
	showModalScrollBottom,
} from './modules/modal.js';

/*Назначение глобального обработчика событий*/
document.addEventListener('DOMContentLoaded', () => {
	//TABS
	const tabsParent = document.querySelector('.tabheader__items');

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', changeTabContent);

	//TIMERS
	const deadline = '2022-09-08';
	setClock('.timer', deadline);

	//MODAL
	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modalCloseBtn = document.querySelector('[data-modalClose]'),
		modal = document.querySelector('.modal');

	//showModal
	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', showModal);
	});

	// showModal after scroll End
	window.addEventListener('scroll', showModalScrollBottom);

	// hideModal
	modalCloseBtn.addEventListener('click', hideModal);

	// hideModal if click anything
	modal.addEventListener('click', (event) => {
		if (event.target && event.target === modal) {
			hideModal();
		}
	});

	// hideModal if tap Escape
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			hideModal();
		}
	});
});
