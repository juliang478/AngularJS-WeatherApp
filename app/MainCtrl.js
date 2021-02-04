var app = angular.module("weatherApp");
var apiKey = "";
var baseUrl = "http://api.weatherapi.com/v1";
var degreesSymbol = '\u00B0';

app.controller('MainCtrl', function MainCtrl($scope, $http, $log){
  $scope.message = "Hello World";
  $scope.cityName = "Riverside";

  var OnSuccess = (response) => {
    $log.info(response.data.current);
    $scope.weatherData = response.data.current;
    $scope.locationData = response.data.location;

    getDailyForecast($scope.locationData.name);
  }

  var OnDailySuccess = (response) => {
    $log.info(response.data.forecast);
    $scope.dailyForecast = response.data.forecast;
  }

  var OnError = (response) => {
    $scope.error = response.data.message;
  }

  $scope.formatDate = (dateIn) => {
    var date = new Date(dateIn);

    return date.toLocaleDateString();
  }

  $scope.convertMSToTime = (timeInMs) => {
    var time = new Date(timeInMs);

    return time.toLocaleTimeString();
  }

  $scope.formatLocationName = (cityName, stateName) => {
    return `${cityName}, ${stateName}`;
  }

  $scope.formatTemp = (temperature) => {
    return `${temperature} ${degreesSymbol}F`
  }

  $scope.getCurrentWeather = (cityName) => {
    $http.get(`${baseUrl}/current.json?key=${apiKey}&q=${cityName}`)
         .then(OnSuccess, OnError);
  }

  var getDailyForecast = (cityName) => {
    $http.get(`${baseUrl}/forecast.json?key=${apiKey}&q=${cityName}&days=7`)
         .then(OnDailySuccess, OnError);
  }

  //getWeather($scope.cityName); 
});