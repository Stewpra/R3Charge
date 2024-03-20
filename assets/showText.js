async function getJoke() {
  const jokeUrl = 'https://icanhazdadjoke.com/';
  const data = await fetchData(jokeUrl);
  const str = data.joke;
  return str;
}

async function getQuote() {
  const quoteUrl = 'https://api.quotable.io/random';
  const data = await fetchData(quoteUrl);
  const str = data.content;
  return str;
}

async function displayText(type) {
  if (type === 'joke') {
    textDisplay.innerText = await getJoke();
    return;
  }
  if (type === 'quote') {
    textDisplay.innerText = await getQuote();
    return;
  }
  console.log(`invalid parameter: ${type}`);
}

function displayModal(title, text) {
  const modal = document.getElementById('my_modal_1');
  const modalContent = modal.querySelector('.modal-box');

  modalContent.innerHTML = `
    <h3 class="text-center font-semibold">${title}</h3>
    <p class="py-4 text-center text-4xl font-bold">${text}</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Snooze!</button>
      </form>
    </div>
  `;

  modal.showModal();
}
