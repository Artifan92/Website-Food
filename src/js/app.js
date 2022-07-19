'use strict';
import {
	hideTabContent,
	showTabContent,
	changeTabContent,
	tabsParent,
} from './modules/tabs.js';

import { setClock, deadline } from './modules/timer.js';

import {
	showModal,
	hideModal,
	showModalScrollBottom,
	showThanksModal,
	message,
	modalTrigger,
	modal,
} from './modules/modal.js';

import { menuItem, MenuCard, menuParentSelector } from './modules/menu.js';

/*Назначение глобального обработчика событий*/
document.addEventListener('DOMContentLoaded', () => {
	//TABS
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', changeTabContent);

	//TIMERS
	setClock('.timer', deadline);

	//MODAL
	//showModal
	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', showModal);
	});

	// showModal after scroll End
	window.addEventListener('scroll', showModalScrollBottom);

	// hideModal if click anything/showModal
	modal.addEventListener('click', (event) => {
		if (
			(event.target && event.target === modal) ||
			event.target.getAttribute('data-modalClose') === ''
		) {
			hideModal();
		}
	});

	// hideModal if tap Escape
	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			hideModal();
		}
	});

	// ADD ITEM MENU
	//очищаем этот элемент
	document.querySelector(menuParentSelector).innerHTML = '';

	//создаем элементы, данные берем из объектов массива
	for (let menu of menuItem) {
		new MenuCard(menu, menuParentSelector).render();
	}
});
