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

function getHour(time){
  let timeRemaining = time;
  let hours = Math.floor(timeRemaining/3600);
  return hours;
}
console.log(getHour(65));

function getMinutes(time){
  let timeRemaining = time;
  let minutes = Math.floor(timeRemaining/60);
  return minutes;
}
console.log(getMinutes(65));

function getSeconds(time){
  let timeRemaining = time;
  let seconds = Math.floor(timeRemaining);
  return seconds;
}
console.log(getSeconds(65));

/*
const minutes = Math.floor(time / 60);
const seconds = time - minutes * 60;
const hours = Math.floor(time / 3600);
time = time - hours * 3600;
*/
function fetchData(url) {
  fetch(url, {
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
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch:', error);
    });
}

// Fetch a random dad joke
fetchData('https://icanhazdadjoke.com/');

function handleClick() {
  console.log('test click');
}

timerButton.addEventListener('click', handleClick);

function init() {
  startTimer(30);
}

init();
