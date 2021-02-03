var app = angular.module("weatherApp");
var apiKey = "{API_KEY}";

app.controller('MainCtrl', function MainCtrl($scope, $http, $log){
  $scope.message = "Hello World";
  $scope.cityName = "Riverside";

  var OnSuccess = (response) => {
    $log.info(response.data);
    $scope.weatherData = response.data;

    getDailyForecast($scope.weatherData.coord.lat, $scope.weatherData.coord.lon);
  }

  var OnDailySuccess = (response) => {
    $log.info(response.data.daily);
    $scope.dailyForecast = response.data.daily;
  }

  var OnError = (response) => {
    $scope.error = response.data.message;
  }

  $scope.convertMSToDate = (dateInMs) => {
    var date = new Date(dateInMs);

    return date.toLocaleDateString();
  }

  $scope.convertMSToTime = (timeInMs) => {
    var time = new Date(timeInMs);

    return time.toLocaleTimeString();
  }

  $scope.getCurrentWeather = (cityName) => {
    $http.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}&units=f`)
         .then(OnSuccess, OnError);
  }

  var getDailyForecast = (lat, long) => {
    $http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`)
         .then(OnDailySuccess, OnError);
  }

  //getWeather($scope.cityName); 
});