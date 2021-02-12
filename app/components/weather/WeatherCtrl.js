(function () {
  angular.module("weatherApp")
    .controller("WeatherCtrl", ["$scope", "$routeParams", "weather", "$log", WeatherCtrl])

  function WeatherCtrl ($scope, $routeParams, weather, $log) {
    var onCurrentWeatherSuccess = (data) => {
      $log.info(data);
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
      return `${temperature}`;
    };

    $scope.formatDate = (dateIn) => {
      $log.info(dateIn);
      var date = new Date(dateIn);
      $log.info(date);
      return date.toDateString();
    };

    var cityName = $routeParams.cityName;

    weather.getCurrentWeather(cityName).then(onCurrentWeatherSuccess);
  };

})();
