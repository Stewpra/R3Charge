const displayText = document.querySelector('#displayTime');

function getTimeUnits(totalSeconds) {
  function getMinutes(seconds) {
    let minutes = Math.floor(totalSeconds / 60);
    return minutes;
  }

  function moduloFromMinutes(seconds) {
    let modulo = totalSeconds % 60;
    return modulo;
  }

  const totalMinutes = getMinutes(totalSeconds);
  const totalSeconds = moduloFromMinutes(totalSeconds);

  return { totalMinutes, totalSeconds };
}

function updateTime(totalHours, totalMinutes, totalSeconds) {
  if (totalHours !== 0) {
    displayText.textContent = `${totalHours} hours`;
  } else if (totalMinutes !== 0) {
    displayText.textContent = `${totalMinutes} minutes`;
  } else {
    displayText.textContent = `${totalSeconds} seconds`;
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
