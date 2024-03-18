function storeDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function startTimer(seconds) {
  let timer = seconds;

  const interval = setInterval(() => {
    console.log(timer);

    if (timer === 0) {
      clearInterval(interval);
      console.log("Countdown complete!");
    } else {
      timer--;
    }
  }, 1000);
}

function init() {
  startTimer(0);
}

init();
