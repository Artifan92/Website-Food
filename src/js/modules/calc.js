'use strict';

function calculator() {
	const infoPersonToCalc = {
		weight: undefined,
		height: undefined,
		age: undefined,
		inputArr: ['weight', 'height', 'age'],
		activity: 1.375,
		activityArr: [1.2, 1.375, 1.55, 1.725],
		sex: 'female',
		sexArr: ['female', 'male'],
	};

	const locationCalcResult = document.querySelector(
			'.calculating__result span',
		),
		sexPerson = document.querySelectorAll('#gender .calculating__choose-item'),
		activityPerson = document.querySelectorAll(
			'#activity .calculating__choose-item',
		),
		heightPerson = document.querySelector('#height'),
		weightPerson = document.querySelector('#weight'),
		agePerson = document.querySelector('#age');

	function calcTotal(infoAboutPerson) {
		let total;

		if (
			infoAboutPerson.sex == 'male' &&
			infoPersonToCalc.weight &&
			infoPersonToCalc.height &&
			infoPersonToCalc.age &&
			infoPersonToCalc.activity
		) {
			total = Math.round(
				(88.36 +
					13.4 * infoPersonToCalc.weight +
					4.8 * infoPersonToCalc.height -
					5.7 * infoPersonToCalc.age) *
					infoPersonToCalc.activity,
			); // для мужчин
		} else if (
			infoAboutPerson.sex == 'female' &&
			infoPersonToCalc.weight &&
			infoPersonToCalc.height &&
			infoPersonToCalc.age &&
			infoPersonToCalc.activity
		) {
			total = Math.round(
				(447.6 +
					9.2 * infoPersonToCalc.weight +
					3.1 * infoPersonToCalc.height -
					4.3 * infoPersonToCalc.age) *
					infoPersonToCalc.activity,
			); // для женщин
		} else {
			total = '_______';
		}

		locationCalcResult.innerHTML = total;
	}

	function cleanActiveClass(parent, activClass) {
		parent.forEach(pers => {
			pers.classList.remove(activClass);
		});
	}

	function changeSexToPerson(event) {
		event.preventDefault();
		infoPersonToCalc.sexArr.forEach(sex => {
			if (event.target.getAttribute('id') == sex) {
				cleanActiveClass(sexPerson, 'calculating__choose-item_active');
				infoPersonToCalc.sex = sex;
				localStorage.setItem('sex', sex);
				event.target.classList.add('calculating__choose-item_active');
			}
		});

		calcTotal(infoPersonToCalc);
	}

	function changeActivityToPerson(event) {
		event.preventDefault();
		infoPersonToCalc.activityArr.forEach(activity => {
			if (event.target.getAttribute('data-activity') == activity) {
				cleanActiveClass(activityPerson, 'calculating__choose-item_active');
				infoPersonToCalc.activity = activity;
				localStorage.setItem('activity', activity);
				event.target.classList.add('calculating__choose-item_active');
			}
		});

		calcTotal(infoPersonToCalc);
	}

	function changeInputInfo(parent) {
		parent.addEventListener('input', event => {
			const target = event.target;
			if (target.value.match(/\D/g)) {
				target.style.border = '2px solid red';
			} else {
				target.style.border = '';
				infoPersonToCalc.inputArr.forEach(input => {
					if (target.getAttribute('id') == input) {
						infoPersonToCalc[input] = event.target.value;
					}
				});
			}
			calcTotal(infoPersonToCalc);
		});
	}

	function defaultToCalc() {
		if (!localStorage.getItem('sex')) {
			infoPersonToCalc.sex = 'female';
			localStorage.setItem('sex', 'female');
			document
				.querySelector('#female')
				.classList.add('calculating__choose-item_active');
		} else {
			document
				.querySelector(`#${localStorage.getItem('sex')}`)
				.classList.add('calculating__choose-item_active');
		}

		if (!localStorage.getItem('activity')) {
			infoPersonToCalc.activity = 1.375;
			localStorage.setItem('activity', 1.375);
			document
				.querySelector('#small')
				.classList.add('calculating__choose-item_active');
		} else {
			document
				.querySelector(`[data-activity="${localStorage.getItem('activity')}"]`)
				.classList.add('calculating__choose-item_active');
		}
	}

	defaultToCalc();
	calcTotal(infoPersonToCalc);

	sexPerson.forEach(person => {
		person.addEventListener('click', changeSexToPerson);
	});

	activityPerson.forEach(person => {
		person.addEventListener('click', changeActivityToPerson);
	});

	changeInputInfo(heightPerson);

	changeInputInfo(weightPerson);

	changeInputInfo(agePerson);
}

export default calculator;
