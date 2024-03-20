async function getJoke() {
  const jokeUrl = 'https://icanhazdadjoke.com/';
  const data = await fetchData(jokeUrl);
  const str = data.joke;
  console.log(str);
}

async function getQuote() {
  const quoteUrl = 'https://api.quotable.io/random';
  const data = await fetchData(quoteUrl);
}

function displayText(str) {
  textDisplay.innerText = str;
}

getJoke();
