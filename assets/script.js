const timerButton = document.querySelector('#timer-button');
const textDisplay = document.querySelector('#text-display');
const batteryDisplay = document.querySelector('#battery-display');
const batteryBar = document.querySelector('#battery-bar');
const rechargeButton = document.querySelector('#recharge-button');

async function fetchData(url) {
	let data;
	try {
		const res = await fetch(url, {
			headers: {
				accept: 'application/json',
			},
		});
		data = await res.json();
	} catch (err) {
		console.error(err);
	} finally {
		return data;
	}
}

function handleClick1() {
	timerButton.setAttribute('disabled', 'disabled');
	startTimer(30);
}

function handleClick2() {
	rechargeButton.setAttribute('disabled', 'disabled');
	startRecharge(30);
}

function endWorkTime() {
	// hideBatteryDisplay();
	// displayText('quote');
}

function init() {
	timerButton.addEventListener('click', handleClick1);
	rechargeButton.addEventListener('click', handleClick2);
}

init();
