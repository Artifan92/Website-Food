import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
	modules: [Navigation, Autoplay, Pagination],
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
});

export { swiper };
