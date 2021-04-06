var history = JSON.parse(localStorage.getItem("weatherInfo")) || [];
var searchForm = document.querySelector("#search-form");
var serchTermInput = document.querySelector("#search-bar");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var searchTerm = serchTermInput.value;
  //history.push(searchTerm);
  localStorage.setItem("weatherInfo", JSON.stringify(history))
  listItem(searchTerm)
  var urlToFetch = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=7cfd08227ecf263cbffd0eac74bb8f69&units=imperial`

  fetch(urlToFetch).then(function (response) {
    return response.json()
  }).then(function (data) {
    var resultContent = document.getElementById('root');
    resultContent.innerHTML = ""
    var cityh2 = document.createElement("h2");
    cityh2.textContent = "City: " + data.city.name;
    resultContent.append(cityh2);

    var dateh3 = document.createElement("h3");
    dateh3.textContent = new Date().toDateString();
    resultContent.append(dateh3);

    var iconh3 = document.createElement("img");
    iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png");
    resultContent.append(iconh3);

    var temph3 = document.createElement("h3");
    temph3.textContent = "Temperature: " + data.list[0].main.temp;
    resultContent.append(temph3);

    var humidityh3 = document.createElement("h3");
    humidityh3.textContent = "Humidity: " + data.list[0].main.humidity;
    resultContent.append(humidityh3);

    var windspeedh3 = document.createElement("h3");
    windspeedh3.textContent = "Wind Speed: " + data.list[0].wind.speed;
    resultContent.append(windspeedh3);

    var day1dateh3 = document.createElement("h3");
    day1dateh3.textContent = data.list[7].dt_txt.split(" ")[0];
    var day1resultContent = document.getElementById("card-1");
    day1resultContent.innerHTML = ""
    day1resultContent.append(day1dateh3);

    var day1iconh3 = document.createElement("img");
    day1iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png");
    var day1resultContent = document.getElementById("card-1");
    day1resultContent.append(day1iconh3);

    var day1temph3 = document.createElement("h3");
    day1temph3.textContent = "Temp: " + data.list[7].main.temp;
    var day1resultContent = document.getElementById("card-1");
    day1resultContent.append(day1temph3);

    var day1humidityh3 = document.createElement("h3");
    day1humidityh3.textContent = data.list[7].main.humidity;
    var day1resultContent = document.getElementById("card-1");
    day1resultContent.append("Humidity: ", day1humidityh3);

    var day2dateh3 = document.createElement("h3");
    day2dateh3.textContent = data.list[15].dt_txt.split(" ")[0];
    var day2resultContent = document.getElementById("card-2");
    day2resultContent.innerHTML = ""
    day2resultContent.append(day2dateh3);

    var day2iconh3 = document.createElement("img");
    day2iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png");
    var day2resultContent = document.getElementById("card-2");
    day2resultContent.append(day2iconh3);

    var day2temph3 = document.createElement("h3");
    day2temph3.textContent = "Temp: " + data.list[15].main.temp;
    var day2resultContent = document.getElementById("card-2");
    day2resultContent.append(day2temph3);

    var day2humidityh3 = document.createElement("h3");
    day2humidityh3.textContent = data.list[15].main.humidity;
    var day2resultContent = document.getElementById("card-2");
    day2resultContent.append("Humidity: ", day2humidityh3);

    var day3dateh3 = document.createElement("h3");
    day3dateh3.textContent = data.list[23].dt_txt.split(" ")[0];
    var day3resultContent = document.getElementById("card-3");
    day3resultContent.innerHTML = ""
    day3resultContent.append(day3dateh3);

    var day3iconh3 = document.createElement("img");
    day3iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png");
    var day3resultContent = document.getElementById("card-3");
    day3resultContent.append(day3iconh3);

    var day3temph3 = document.createElement("h3");
    day3temph3.textContent = "Temp: " + data.list[23].main.temp;
    var day3resultContent = document.getElementById("card-3");
    day3resultContent.append(day3temph3);

    var day3humidityh3 = document.createElement("h3");
    day3humidityh3.textContent = data.list[23].main.humidity;
    var day3resultContent = document.getElementById("card-3");
    day3resultContent.append("Humidity: ", day3humidityh3);

    var day4dateh3 = document.createElement("h3");
    day4dateh3.textContent = data.list[31].dt_txt.split(" ")[0];
    var day4resultContent = document.getElementById("card-4");
    day4resultContent.innerHTML = ""
    day4resultContent.append(day4dateh3);

    var day4iconh3 = document.createElement("img");
    day4iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png");
    var day4resultContent = document.getElementById("card-4");
    day4resultContent.append(day4iconh3);

    var day4temph3 = document.createElement("h3");
    day4temph3.textContent = "Temp: " + data.list[31].main.temp;
    var day4resultContent = document.getElementById("card-4");
    day4resultContent.append(day4temph3);

    var day4humidityh3 = document.createElement("h3");
    day4humidityh3.textContent = + data.list[31].main.humidity;
    var day4resultContent = document.getElementById("card-4");
    day4resultContent.append("Humidity: ", day4humidityh3);

    var day5dateh3 = document.createElement("h3");
    day5dateh3.textContent = data.list[39].dt_txt.split(" ")[0];
    var day5resultContent = document.getElementById("card-5");
    day5resultContent.innerHTML = ""
    day5resultContent.append(day5dateh3);

    var day5iconh3 = document.createElement("img");
    day5iconh3.setAttribute("src", "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + ".png");
    var day5resultContent = document.getElementById("card-5");
    day5resultContent.append(day5iconh3);

    var day5temph3 = document.createElement("h3");
    day5temph3.textContent = "Temp: " + data.list[39].main.temp;
    var day5resultContent = document.getElementById("card-5");
    day5resultContent.append(day5temph3);

    var day5humidityh3 = document.createElement("h3");
    day5humidityh3.textContent = data.list[39].main.humidity;
    var day5resultContent = document.getElementById("card-5");
    day5resultContent.append("Humidity: ", day5humidityh3);
  })
})
function listItem(cityname) {
  var li = document.createElement("li")
  li.setAttribute("class", "list-group-item")
  li.textContent = cityname
  document.getElementById("search-history").append(li)
}