(function () {
  var module = angular.module("weatherApp");

  var WeatherCtrl = function ($scope, $routeParams, weather, $log) {
    var onCurrentWeatherSuccess = (data) => {
      
      $scope.weatherData = data.current;
      $scope.locationData = data.location;

      weather.getThreeDayForecast(cityName)
        .then(OnSuccess, OnError);
    };

    var OnSuccess = (data) => {
      $log.info(data.forecast);
      $scope.forecast = data.forecast;
    }

    var OnError = (data) => {
      $scope.error = data.error.message;
    }

    $scope.formatLocationName = (cityName, stateName) => {
      return `${cityName}, ${stateName}`;
    };

    $scope.formatTemp = (temperature) => {
      return `${temperature} ${degreesSymbol}F`;
    };

    $scope.formatDate = (dateIn) => {
      var date = new Date(dateIn);

      return date.toDateString();
    };

    var cityName = $routeParams.cityName;

    weather.getCurrentWeather(cityName).then(onCurrentWeatherSuccess);
  };

  module.controller("WeatherCtrl", WeatherCtrl);
})();
