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
	modalTrigger,
	modal,
	forms,
	bindPostData,
} from './modules/modal.js';

import { menuParentSelector, MenuCard } from './modules/menu.js';

import { getResource } from './modules/server.js';

import {
	showSlide,
	offerSlides,
	offerSliderPrev,
	offerSliderNext,
} from './modules/slider.js';

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
});

forms.forEach((item) => {
	bindPostData(item);
});

//MENU
getResource('http://localhost:3000/menu').then((data) => {
	data.forEach((obj) => {
		new MenuCard(obj, menuParentSelector).render();
	});
});

//SLIDER
let numSlide = 1;

showSlide(numSlide);

offerSliderPrev.addEventListener('click', () => {
	numSlide -= 1;
	if (numSlide <= 0) {
		numSlide = offerSlides.length;
	}
	showSlide(numSlide);
});

offerSliderNext.addEventListener('click', () => {
	numSlide += 1;
	if (numSlide > offerSlides.length) {
		numSlide = 1;
	}
	showSlide(numSlide);
});
