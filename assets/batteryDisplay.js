const displayTextEl = document.querySelector("#displayTime");

function getTimeUnits(time) {
  function getHours(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    return hours;
  }

  function moduloFromHour(totalSeconds) {
    let modulo = totalSeconds % 3600;
    return modulo;
  }

  function getMinutes(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    return minutes;
  }

  function moduloFromMinutes(totalSeconds) {
    let modulo = totalSeconds % 60;
    return modulo;
  }

  const totalHours = getHours(time);
  const remainingFromHours = moduloFromHour(time);

  const totalMinutes = getMinutes(remainingFromHours);
  const remainingFromMinutes = moduloFromMinutes(remainingFromHours);

  const totalSeconds = remainingFromMinutes;
  return { totalHours, totalMinutes, totalSeconds };
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

updateTime(0, 55, 0);

function updateBattery(time, totalTime) {
  const percentage = (time / totalTime) * 100;
  batteryBar.style.width = `${percentage}%`;
  if (percentage >= 10) {
    batteryBar.style.height = "100%";
  }
  if (percentage < 10) {
    height = 15 * percentage;
    batteryBar.style.height = `${height}px`;
  }
  if (percentage < 8) {
    height = "105px";
    batteryBar.style.height = height;
  }
}

function hideBatteryDisplay() {
  batteryDisplay.style.display = "none";
}
