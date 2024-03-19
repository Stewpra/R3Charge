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
