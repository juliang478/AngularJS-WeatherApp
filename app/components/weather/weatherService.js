var apiKey = "";
var baseUrl = "http://api.weatherapi.com/v1";

angular.module("weatherApp").factory("weather", function ($http) {
  var getCurrentWeather = (cityName) => {
    return $http
      .get(`${baseUrl}/current.json?key=${apiKey}&q=${cityName}`)
      .then((response) => {
        return response.data;
      });
  };

  var getThreeDayForecast = (cityName) => {
    return $http
      .get(`${baseUrl}/forecast.json?key=${apiKey}&q=${cityName}&days=3`)
      .then((response) => {
        return response.data;
      });
  };

  return {
    getCurrentWeather,
    getThreeDayForecast,
  };
});
