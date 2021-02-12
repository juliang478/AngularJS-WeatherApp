(function () {
  var app = angular.module("weatherApp", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "/app/components/main/main.html",
          controller: "MainCtrl",
        })
        .when("/weather/current/:cityName", {
          templateUrl: "/app/components/weather/weatherDetails.html",
          controller: "WeatherCtrl",
        })
        .when("/astro", {
          templateUrl: "/app/components/astro/astro.html",
          controller: "AstroCtrl",
          controllerAs: "astro",
        })
        .otherwise("/");
    },
  ]);
})();
