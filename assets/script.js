const timerButton = document.querySelector('#timer-button')
function storeDataInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function init() {}

function handleClick() {
  console.log("test click")
}

timerButton.addEventListener("click", handleClick);

init();


