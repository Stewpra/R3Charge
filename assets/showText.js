async function getJoke() {
  const jokeUrl = 'https://icanhazdadjoke.com/';
  const data = await fetchData(jokeUrl);
  console.log(data);
  return data;
}

async function getQuote() {
  const quoteUrl = 'https://api.quotable.io/random';
  const data = await fetchData(quoteUrl);
  console.log(data);
  return data;
}

function displayText(str) {
  textDisplay.innerText = str;
}
