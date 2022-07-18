const menuItem = [
	{
		id: 'menuFit',
		title: `Меню "Фитнес"`,
		descr: `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
		price: 9,
		src: 'img/tabs/vegy.jpg',
		alt: 'vegy',
	},
	{
		id: 'menuPremium',
		title: `Меню “Премиум”`,
		descr: `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
		price: 18,
		src: 'img/tabs/elite.jpg',
		alt: 'elite',
	},
	{
		id: 'menuPost',
		title: `Меню "Постное"`,
		descr: `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
		price: 11,
		src: 'img/tabs/post.jpg',
		alt: 'post',
	},
];

class MenuCard {
	constructor(arrey, parentSelector) {
		this.id = arrey.id;
		this.src = arrey.src;
		this.alt = arrey.alt;
		this.title = arrey.title;
		this.descr = arrey.descr;
		this.price = arrey.price;
		this.transfer = 38;
		this.parent = document.querySelector(parentSelector);
		this.changeToUAH();
	}
	changeToUAH() {
		this.price = this.price * this.transfer;
	}

	render() {
		const element = document.createElement('div');

		element.innerHTML = `					
			<div class="menu__item">
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			</div>
			`;
		this.parent.append(element);
	}
}

export { menuItem, MenuCard };
