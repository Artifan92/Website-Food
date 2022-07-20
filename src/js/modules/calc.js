const infoPersonToCalc = {
	weight: undefined,
	height: undefined,
	age: undefined,
	activity: undefined,
};

function calcTotal() {
	Math.round(
		(88.36 +
			13.4 * infoPersonToCalc.weight +
			4.8 * infoPersonToCalc.height -
			5.7 * infoPersonToCalc.age) *
			infoPersonToCalc.activity
	); // для мужчин
	Math.round(
		(447.6 +
			9.2 * infoPersonToCalc.weight +
			3.1 * infoPersonToCalc.height -
			4.3 * infoPersonToCalc.age) *
			infoPersonToCalc.activity
	); // для женщин
}
