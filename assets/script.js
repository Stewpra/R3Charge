const timerButton = document.querySelector('#timer-button');
const textDisplay = document.querySelector('#text-display');
const batteryDisplay = document.querySelector('#battery-display');
const batteryBar = document.querySelector('#battery-bar');

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

function handleClick() {
  timerButton.setAttribute('disabled', 'disabled');
  startTimer(30);
}

function init() {
  timerButton.addEventListener('click', handleClick);
}

init();
