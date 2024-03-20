function getCurrentTime() {
  return dayjs().unix();
}

async function startTimer(seconds) {
  let timer = seconds;

  const interval = setInterval(async () => {
    if (timer === 0) {
      clearInterval(interval);
      const text = await getQuote();
      displayModal(text);
    } else {
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
      const text = await getJoke();
      displayModal(text);
    } else {
      updateBattery(timer, 30);
      timer++;
    }
  }, 1000);
}
