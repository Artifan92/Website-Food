'use strict';

import tabs from './modules/tabs.js';

import timer from './modules/timer.js';

import calculator from './modules/calc.js';

import modal from './modules/modal.js';

import menu from './modules/menu.js';

import sliders from './modules/slider.js';

/*Назначение глобального обработчика событий*/
document.addEventListener('DOMContentLoaded', () => {
	modal('.modal', 500000);
	tabs(
		'.tabcontent',
		'.tabheader__items',
		'.tabheader__item',
		'tabheader__item_active',
		'show',
		'hide',
		'fade'
	);
	timer('2022-09-08', '.timer');
	calculator();
	menu();
	sliders();
});
