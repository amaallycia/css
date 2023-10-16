let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNSDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
let day = days[now.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${day},${hours}:${minutes}`;
function Fivedaysforcast() {
  let forecastElement = document.querySelector("#Forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["MON", "TUE", "WED"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      ` 
      <div class="col-3">
          <div class="weather-date">${day}</div>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            class="image"
          />
          <div class="temperature-readings">
            <span class="minimum-temperature">16°</span
            ><span class="maxmum-temperature">-25°</span>
          </div>
       
      </div>`;
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
function getforecast(coords) {
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}&units={metrics}`;
}

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h4").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("section").innerHTML = response.data.weather[0].main;

  getforecast(response.data.coord);
  document.querySelector("h2").innerHTML = response.data.weather[0].icon;
  h2Element.setAttribute(
    "src",
    ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  h2Element.setAttribute("alt", response.data.weather[0].section);
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

let h5 = document.querySelector("h5");
h5.addEventListener("submit", handleSubmit);

searchCity("Blantyre");
Fivedaysforcast();
