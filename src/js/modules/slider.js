'use strict';

import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';

function sliders() {
	new Swiper('.offer__slider', {
		modules: [Navigation, Autoplay, Pagination],
		loop: true,
		navigation: {
			nextEl: '.offer__slider-next',
			prevEl: '.offer__slider-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: '.offer-pagination',
			type: 'fraction',
		},
	});

	new Swiper('.swiperMenu', {
		modules: [Autoplay],
		slidesPerView: 3,
		loop: true,
		spaceBetween: 40,
		slidesPerGroup: 1,

		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
}

export default sliders;
