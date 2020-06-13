export default async  function generateGif(word) {
  const response = await fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=W1qmcReeoiHfZpUAfgGoSezLXMNcK6Co&s=${word}`,
  { mode: "cors" }
);
  const newGif = await response.json();
  return newGif.data.images.original.url;
}