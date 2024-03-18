const timerButton = document.querySelector('#timer-button');
const batteryBar = document.querySelector('#battery-bar');

function storeDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
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
}

function updateBattery(time, totalTime) {
  const percentage = (time / totalTime) * 100;
  console.log(percentage);
  batteryBar.style.width = `${percentage}%`;
}

function handleClick() {
  console.log('test click');
}

timerButton.addEventListener('click', handleClick);

function init() {
  startTimer(30);
}

init();
