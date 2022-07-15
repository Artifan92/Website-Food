'use strict';
import {
	hideTabContent,
	showTabContent,
	changeTabContent,
} from './modules/tabs.js';

/*Назначение глобального обработчика событий*/
document.addEventListener('DOMContentLoaded', () => {
	const tabsParent = document.querySelector('.tabheader__items');

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', changeTabContent);
});
