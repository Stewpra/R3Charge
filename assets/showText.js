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
