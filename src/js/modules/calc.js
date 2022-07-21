const infoPersonToCalc = {
	weight: undefined,
	height: undefined,
	age: undefined,
	activity: 1.375,
	activityArr: [1.2, 1.375, 1.55, 1.725],
	sex: 'female',
	sexArr: ['female', 'male'],
};

const calcResult = document.querySelector('.calculating__result span'),
	sexActivityPerson = document.querySelectorAll(
		'#female, #male, #low, #small, #medium, #high'
	),
	sexPerson = document.querySelectorAll('#gender .calculating__choose-item'),
	activityPerson = document.querySelectorAll(
		'#activity .calculating__choose-item'
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
				infoPersonToCalc.activity
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
				infoPersonToCalc.activity
		); // для женщин
	} else {
		total = '_______';
	}

	calcResult.innerHTML = total;
}

function cleanActiveClass(parent) {
	parent.forEach((pers) => {
		pers.classList.remove('calculating__choose-item_active');
	});
}

function changeSexActivityToPerson(event) {
	event.preventDefault();
	if (event.target.offsetParent.getAttribute('id') == 'gender') {
		infoPersonToCalc.sexArr.forEach((sex) => {
			if (event.target.getAttribute('id') == sex) {
				cleanActiveClass(sexPerson);
				infoPersonToCalc.sex = sex;
				localStorage.setItem('sex', sex);
				event.target.classList.add('calculating__choose-item_active');
			}
		});
	} else if (event.target.offsetParent.getAttribute('id') == 'activity') {
		infoPersonToCalc.activityArr.forEach((activity) => {
			if (event.target.getAttribute('data-activity') == activity) {
				cleanActiveClass(activityPerson);
				infoPersonToCalc.activity = activity;
				localStorage.setItem('activity', activity);
				event.target.classList.add('calculating__choose-item_active');
			}
		});
	}
	calcTotal(infoPersonToCalc);
}

function changeInputInfo(parent) {
	parent.addEventListener('input', (event) => {
		if (event.target.value.match(/\D/g)) {
			event.target.style.border = '2px solid red';
		} else {
			event.target.style.border = '';
			if (event.target.getAttribute('id') == 'height') {
				infoPersonToCalc.height = event.target.value;
			}
			if (event.target.getAttribute('id') == 'weight') {
				infoPersonToCalc.weight = event.target.value;
			}
			if (event.target.getAttribute('id') == 'age') {
				infoPersonToCalc.age = event.target.value;
			}
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

export {
	calcTotal,
	infoPersonToCalc,
	sexActivityPerson,
	changeSexActivityToPerson,
	heightPerson,
	weightPerson,
	agePerson,
	changeInputInfo,
	defaultToCalc,
};
