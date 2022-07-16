'use strict';
import {
	hideTabContent,
	showTabContent,
	changeTabContent,
} from './modules/tabs.js';

import setClock from './modules/timer.js';

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
});
