export default async function getWeather(city) {
  let lat, lng;
  const responseLoc = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyDEeWtjk96Y_jbeB_u6qX0P9KvLxERp5OQ`,
    { mode: "cors" }
  );
  let locationData = await responseLoc.json();
  lat = locationData.results[0].geometry.location.lat;
  lng = locationData.results[0].geometry.location.lng;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&units=metric&appid=1e0f156237000de881c5696a94fb4425`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}
