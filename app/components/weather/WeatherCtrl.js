(function () {
  var module = angular.module("weatherApp");

  var WeatherCtrl = function($scope, $routeParams, weather, $log) {
    
    var onCurrentWeatherSuccess = (data) => {
      $log.info(data);
      $scope.weatherData = data.current;
      $scope.locationData = data.location;
    };

    $scope.formatLocationName = (cityName, stateName) => {
      return `${cityName}, ${stateName}`;
    }
  
    $scope.formatTemp = (temperature) => {
      return `${temperature} ${degreesSymbol}F`
    }

    $scope.formatDate = (dateIn) => {
      var date = new Date(dateIn);
  
      return date.toLocaleDateString();
    }

    var cityName = $routeParams.cityName;

    weather.getCurrentWeather(cityName).then(onCurrentWeatherSuccess);
  };

  module.controller("WeatherCtrl", WeatherCtrl);
})();
