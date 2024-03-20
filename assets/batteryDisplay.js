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

  const minutes = getMinutes(totalSeconds);
  const seconds = moduloFromMinutes(totalSeconds);
  console.log(minutes, seconds);
  return { minutes, seconds };
}

function updateTime(totalHours, totalMinutes, totalSeconds) {
  if (totalHours !== 0) {
    displayTextEl.textContent = `${totalHours} hours`;
  } else if (totalMinutes !== 0) {
    displayTextEl.textContent = `${totalMinutes} minutes`;
  } else {
    displayTextEl.textContent = `${totalSeconds} seconds`;
  }
}

function updateBattery(time, totalTime) {
  const percentage = (time / totalTime) * 100;
  batteryBar.style.width = `${percentage}%`;
  if (percentage >= 10) {
    batteryBar.style.height = '100%';
  }
  if (percentage < 10) {
    height = 15 * percentage;
    batteryBar.style.height = `${height}px`;
  }
  if (percentage < 8) {
    height = '105px';
    batteryBar.style.height = height;
  }
}

function hideBatteryDisplay() {
  batteryDisplay.style.display = 'none';
}
