var apiKey = "1187cf3bf8b44cc9abe183842210402";
var baseUrl = "http://api.weatherapi.com/v1";

angular.module("weatherApp")
  .factory("weather", function ($http) {
  
  var getCurrentWeather = (cityName) => {
    return $http.get(`${baseUrl}/current.json?key=${apiKey}&q=${cityName}`)
                .then((response) => {
           return response.data;
         });
  }
  
  var getDailyForcast = (cityName) => {

  }
  
  return {
    getCurrentWeather,
    getDailyForcast
  };

  

});
