const timerButton = document.querySelector('#timer-button');
const textDisplay = document.querySelector('#text-display');
const batteryDisplay = document.querySelector('#battery-display');
const batteryBar = document.querySelector('#battery-bar');
const rechargeButton = document.querySelector('#recharge-button');
const endDayButton = document.querySelector('#end-day-button');
const dismissButton = document.getElementById('dismiss-button');
const revealButton = document.getElementById('show-button');
console.log(revealButton);
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

function handleStartTimer() {
  timerButton.style.display = 'none';
  rechargeButton.style.display = 'none';
  storeDataInLocalStorage('startTime', getCurrentTime());
  startTimer(30);
}

function handleStartRecharge() {
  timerButton.style.display = 'none';
  rechargeButton.style.display = 'none';
  startRecharge(30);
}
function handleTimeToggle() {
  console.log(displayTextEl);
  
  if (displayTextEl.style.display === 'none') {
    displayTextEl.style.display = 'block';
  } else {
    displayTextEl.style.display = 'none';
  }
}

function endWorkTime() {
  timerButton.style.display = 'none';
  rechargeButton.style.display = 'block';
}

function endRechargeTime() {
  timerButton.style.display = 'block';
  rechargeButton.style.display = 'none';
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

function showToast() {
  const toast = document.getElementById('dismiss-toast');
  toast.style.display = 'block';
}

function dismissToast() {
  const toast = document.getElementById('dismiss-toast');
  toast.style.display = 'none';
}

function handleEndDay(interval) {
  localStorage.removeItem('startTime');
  clearInterval(interval);
  updateBattery(1, 1);
  timerButton.style.display = 'block';
  displayTextEl.textContent = '100%';
}

function init() {
  timerButton.addEventListener('click', handleStartTimer);
  rechargeButton.addEventListener('click', handleStartRecharge);
  revealButton.addEventListener('click', handleTimeToggle);

  initTimer(30);
}

dismissButton.addEventListener('click', dismissToast);

init();


