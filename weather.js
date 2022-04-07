let apiKey = "5723740d8d0f3d5046687fbab7668982";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function handleWeatherResponse(response) {
  let temperature = response.data.main.temp;
  document.querySelector("#tempOutput").innerHTML = temperature;
}
function makeCitySearchUrl(city) {
  return `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
}

function getCityTemperature() {
  let searchInput = document.querySelector("#searchInput");
  let cityNameHeader = document.querySelector("#cityNameHeader");
  let cityInput = searchInput.value;
  cityNameHeader.innerHTML = cityInput;
  axios(makeCitySearchUrl(encodeURIComponent(cityInput))).then(
    handleWeatherResponse
  );
}
function onSearchEnter(event) {
  if (event.code === "Enter") {
    getCityTemperature();
  }
}

function setTimeHeader() {
  var today = new Date();
  var day = today.getDay();
  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var monthlist = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var currentDate =
    daylist[today.getDay()] +
    "-" +
    monthlist[today.getMonth()] +
    "-" +
    today.getDate();

  var time =
    formatTimeNumber(today.getHours()) +
    ":" +
    formatTimeNumber(today.getMinutes());
  var dateTime = currentDate + " " + time;

  document.querySelector("#currentDateTime").innerHTML = dateTime;
}
function formatTimeNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", getCityTemperature);
searchInput.addEventListener("keypress", onSearchEnter);

setTimeHeader();
