import { getZero } from '../modules/timer.js';

const offerSlides = document.querySelectorAll('.offer__slide'),
	currentSlide = document.querySelector('#current'),
	totalSlide = document.querySelector('#total'),
	offerSliderPrev = document.querySelector('.offer__slider-prev'),
	offerSliderNext = document.querySelector('.offer__slider-next');

function showSlide(numSlide) {
	const total = getZero(offerSlides.length);
	totalSlide.innerHTML = total;

	offerSlides.forEach((slide, index) => {
		if (index + 1 === numSlide) {
			slide.classList.add('show');
			slide.classList.remove('hide');
			currentSlide.innerHTML = getZero(numSlide);
		} else {
			slide.classList.remove('show');
			slide.classList.add('hide');
		}
	});
}

export { showSlide, offerSlides, offerSliderPrev, offerSliderNext };
