const timerButton = document.querySelector('#timer-button');
const batteryBar = document.querySelector('#battery-bar');

function storeDataInLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function getCurrentTime() {
	return dayjs().unix();
}

function startTimer(seconds) {
	let timer = seconds;

	const interval = setInterval(() => {
		console.log(timer);

		if (timer === 0) {
			clearInterval(interval);
			console.log('Countdown complete!');
		} else {
			updateBattery(timer, 30);
			timer--;
		}
	}, 1000);

	storeDataInLocalStorage('startTime', getCurrentTime());
}

function updateBattery(time, totalTime) {
	const percentage = (time / totalTime) * 100;
	console.log(percentage);
	batteryBar.style.width = `${percentage}%`;
}

function fetchData(url) {
	let data = '';

	return fetch(url, {
		headers: {
			Accept: 'text/plain',
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response error');
			}

			return response.text();
		})
		.then((text) => {
			let data = text;
			return data;
		})
		.catch((error) => {
			console.error('There was a problem with the fetch:', error);
		});
}

function getJoke() {
	const jokeUrl = 'https://icanhazdadjoke.com/';
	return fetchData(jokeUrl);
}

function getQuote() {
	const quoteUrl = '';
	return fetchData(quoteUrl);
}

function handleClick() {
	console.log('test click');
}

timerButton.addEventListener('click', handleClick);

function init() {
	startTimer(30);
}

init();
