'use strict';

import { getZero } from '../services/services.js';

function timer(deadline, selectorTimer) {
	function getTimeRemaining() {
		let days, hours, minutes, seconds;
		const timeDiference = Date.parse(deadline) - Date.parse(new Date());

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

	function setClock() {
		const blockTimer = document.querySelector(selectorTimer),
			days = blockTimer.querySelector('#days'),
			hours = blockTimer.querySelector('#hours'),
			minutes = blockTimer.querySelector('#minutes'),
			seconds = blockTimer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			const timeDiference = getTimeRemaining(deadline);

			days.innerHTML = getZero(timeDiference.days);
			hours.innerHTML = getZero(timeDiference.hours);
			minutes.innerHTML = getZero(timeDiference.minutes);
			seconds.innerHTML = getZero(timeDiference.seconds);

			if (timeDiference.total <= 0) {
				clearInterval(timeInterval);
			}
		}

		updateClock();
	}

	setClock();
}

export default timer;
