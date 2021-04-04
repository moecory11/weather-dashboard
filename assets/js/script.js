var responseText = document.getElementById('root');
requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=7cfd08227ecf263cbffd0eac74bb8f69&units=imperial'
function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}
getApi(requestUrl);

var searchForm = document.querySelector("#search-form");
var serchTermInput = document.querySelector("#search-bar")

searchForm.addEventListener("submit", function(event){
  event.preventDefault();
  console.log("form submitted!")
  var searchTerm = serchTermInput.value;
  console.log(searchTerm);
  var urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=7cfd08227ecf263cbffd0eac74bb8f69&units=imperial`
  fetch(urlToFetch).then(function(response){
    return response.json()
  }).then(function(data){
    console.log(data.name);
    console.log(data.dt);
    console.log(data.weather[0].icon);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
  })
})



