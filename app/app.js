var app = angular.module("weatherApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/main", {
      templateUrl: "/app/components/main/main.html",
      controller: "MainCtrl"
    })
    .when("/weather/current/:cityName", {
      templateUrl: "/app/components/weather/weatherDetails.html",
      controller: "WeatherCtrl"
    })
    .otherwise({redirectTo: "/main"})
});