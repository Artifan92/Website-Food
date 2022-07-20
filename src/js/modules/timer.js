const deadline = '2022-09-08';

function getTimeRemaining(endTime) {
	let days, hours, minutes, seconds;
	const timeDiference = Date.parse(endTime) - Date.parse(new Date());

	if (timeDiference <= 0) {
		(days = 0), (hours = 0), (minutes = 0), (seconds = 0);
	} else {
		(days = Math.floor(timeDiference / (1000 * 60 * 60 * 24))),
			(hours = Math.floor((timeDiference / (1000 * 60 * 60)) % 24)),
			(minutes = Math.floor((timeDiference / (1000 * 60)) % 60)),
			(seconds = Math.floor((timeDiference / 1000) % 60));
	}

	return {
		total: timeDiference,
		days,
		hours,
		minutes,
		seconds,
	};
}

function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
}

function setClock(selector, endTime) {
	const blockTimer = document.querySelector(selector),
		days = blockTimer.querySelector('#days'),
		hours = blockTimer.querySelector('#hours'),
		minutes = blockTimer.querySelector('#minutes'),
		seconds = blockTimer.querySelector('#seconds'),
		timeInterval = setInterval(updateClock, 1000);

	updateClock();

	function updateClock() {
		const timeDiference = getTimeRemaining(endTime);

		days.innerHTML = getZero(timeDiference.days);
		hours.innerHTML = getZero(timeDiference.hours);
		minutes.innerHTML = getZero(timeDiference.minutes);
		seconds.innerHTML = getZero(timeDiference.seconds);

		if (timeDiference.total <= 0) {
			clearInterval(timeInterval);
		}
	}
}

export { setClock, deadline, getZero };
