function getCurrentTime() {
  return dayjs().unix();
}

function startTimer(seconds) {
  let timer = seconds;

  const interval = setInterval(async () => {
    if (timer === 0) {
      clearInterval(interval);
      const text = await getQuote();
      displayModal("Here's a quote to start your break:", text);
      endWorkTime();
    } else {
      updateRemainingTimeDisplay(getTimeUnits(timer));
      updateBattery(timer, 30);
      timer--;
    }
  }, 1000);
  endDayButton.addEventListener('click', () => handleEndDay(interval));
}

async function startRecharge(seconds) {
  let timer = 1;
  const interval = setInterval(async () => {
    if (timer === seconds) {
      clearInterval(interval);
      console.log('Recharge Complete!');
      const text = await getJoke();
      displayModal("Here's a joke to get you pumped up to work:", text);
      endRechargeTime();
    } else {
      updateBattery(timer, 30);
      timer++;
    }
  }, 1000);
  endDayButton.addEventListener('click', () => handleEndDay(interval));
}
