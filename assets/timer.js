function getCurrentTime() {
  return dayjs().unix();
}

function startTimer(seconds) {
  let timer = seconds;

  const interval = setInterval(() => {
    if (timer === 0) {
      clearInterval(interval);
      endWorkTime();
    } else {
      updateRemainingTimeDisplay(getTimeUnits(timer));
      updateBattery(timer, 30);
      timer--;
    }
  }, 1000);
}

async function startRecharge(seconds) {
  let timer = 1;
  const interval = setInterval(async () => {
    if (timer === seconds) {
      clearInterval(interval);
      console.log('Recharge Complete!');
      const jokeText = await getJoke();
      displayModal(jokeText);
    } else {
      updateBattery(timer, 30);
      timer++;
    }
  }, 1000);
}
