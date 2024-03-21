const displayTextEl = document.querySelector('#displayTime');

function getTimeUnits(totalSeconds) {
  function getMinutes(time) {
    let minutes = Math.floor(time / 60);
    return minutes;
  }

  function moduloFromMinutes(time) {
    let modulo = time % 60;
    return modulo;
  }
//By converting seconds from minutes, it allows the display to change based on how much time is left. Minutes and seconds were preferred.
  const minutes = getMinutes(totalSeconds);
  const seconds = moduloFromMinutes(totalSeconds);
  return { minutes, seconds };
}

function updateRemainingTimeDisplay({ minutes, seconds }) {
  if (minutes !== 0) {
    displayTextEl.textContent = `${minutes} Min`;
  } else {
    displayTextEl.textContent = `${seconds} Sec`;
  }
}

function updateBattery(time, totalTime) {
  const percentage = (time / totalTime) * 100;
  batteryBar.style.width = `${percentage}%`;
  if (percentage >= 10) {
    batteryBar.style.height = '100%';
  }
  if (percentage < 10) {
    batteryBar.style.height = `${90}%`;
  }

}

function hideBatteryDisplay() {
  batteryDisplay.style.display = 'none';
}
