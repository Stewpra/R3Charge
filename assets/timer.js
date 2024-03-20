function storeDataInLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
	return localStorage.getItem(key);
}

function getCurrentTime() {
	return dayjs().unix();
}

function startTimer(seconds) {
	let timer = seconds;

	const interval = setInterval(() => {
		if (timer === 0) {
			clearInterval(interval);
			endWorkTime();
		} else {
			updateBattery(timer, 30);
			timer--;
		}
	}, 1000);

	storeDataInLocalStorage('startTime', getCurrentTime());
}

function startRecharge(seconds) {
	let timer = 1;

	const interval = setInterval(() => {
		if (timer === seconds) {
			clearInterval(interval);
			console.log('Recharge Complete!');
		} else {
			updateBattery(timer, 30);
			timer++;
		}
	}, 1000);
}
