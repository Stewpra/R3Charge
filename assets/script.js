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
  storeDataInLocalStorage('startTime', getCurrentTime());
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

function storeDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}

function initTimer(totalTime) {
  const startTime = dayjs.unix(getDataFromLocalStorage('startTime'));
  const timeDiff = dayjs().diff(startTime, 'seconds');
  const timeLeft = totalTime - timeDiff;
  console.log(timeDiff);
  if (timeLeft <= 0) {
    // probably show some modal here if this is true
    console.log('you have gone past the end time while you were away ');
    return;
  }
  startTimer(timeLeft);
}

function init() {
  timerButton.addEventListener('click', handleClick1);
  rechargeButton.addEventListener('click', handleClick2);

  initTimer(30);
}

init();
