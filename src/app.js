let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
let day = days[now.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${day},${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h4").innerHTML = Math.round(response.data.main.temp);
  iconElement.setAttribute(
    "src",
    ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  document.querySelector("section").innerHTML = response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = "ebce50d94ede40a4e61876fb290cd8e4";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("input").value;
  searchCity(city);
}
function searchLocation(position) {
  let apiKey = "ebce50d94ede40a4e61876fb290cd8e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let iconElement = document.querySelector("h2");
let h5 = document.querySelector("h5");
h5.addEventListener("submit", handleSubmit);

searchCity("Blantyre");
