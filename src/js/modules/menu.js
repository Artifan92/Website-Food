'use strict';

import { getResource } from '../services/services.js';

function menu() {
	const menuParentSelector = '.menu .container .swiperMenu .swiper-wrapper';

	class MenuCard {
		constructor(arrey, parentSelector, ...classes) {
			this.src = arrey.img;
			this.alt = arrey.altimg;
			this.title = arrey.title;
			this.descr = arrey.descr;
			this.price = arrey.price;
			this.classDefault = 'menu__item';
			this.classes = classes;
			this.transfer = 38;
			this.parent = document.querySelector(parentSelector);
			this.changeToUAH();
		}
		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				element.classList.add(this.classDefault);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}

			element.innerHTML = `					
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.descr}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
			`;
			this.parent.append(element);
		}
	}

	getResource('http://localhost:3000/menu').then((data) => {
		data.forEach((obj) => {
			new MenuCard(
				obj,
				menuParentSelector,
				'menu__item',
				'swiper-slide'
			).render();
		});
	});
}

export default menu;
