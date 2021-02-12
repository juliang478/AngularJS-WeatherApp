(function () {
  angular
    .module("weatherApp")
    .controller("MainCtrl", ["$scope", "$location", MainCtrl]);

  function MainCtrl($scope, $location) {
    $scope.cityName = "Riverside";

    $scope.getCurrentWeather = (cityName) => {
      $location.path("/weather/current/" + cityName);
    };
  }
})();
