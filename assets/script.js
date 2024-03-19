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



function getTimeUnits (time) {
  function getHours(totalSeconds){
    let hours = Math.floor(totalSeconds/3600);
    return hours;
  }
  
  function moduloFromHour(totalSeconds){
    let modulo = totalSeconds % 3600;
    return modulo;
  }
  
  function getMinutes(totalSeconds){
    let minutes = Math.floor(totalSeconds/60);
    return minutes;
  }

  function moduloFromMinutes(totalSeconds){
    let modulo = totalSeconds % 60;
    return modulo;
  }

  const totalHours = getHours(time);
  const remainingFromHours = moduloFromHour(time);

  const totalMinutes = getMinutes(remainingFromHours);
  const remainingFromMinutes = moduloFromMinutes(remainingFromHours);

  const totalSeconds = remainingFromMinutes;
  console.log(totalHours, totalMinutes, totalSeconds);
  return {totalHours, totalMinutes, totalSeconds};
}

getTimeUnits(time);

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
