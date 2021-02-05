var app = angular.module("weatherApp");
var degreesSymbol = '\u00B0';

app.controller('MainCtrl', function MainCtrl($scope, $http, $log, $location){
  
  $scope.cityName = "Riverside";

  $scope.getCurrentWeather = (cityName) => {
    $location.path("/weather/current/" + cityName);
      
  }
});