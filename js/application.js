var Resume = angular.module('Resume', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);

Resume.config(function ($routeProvider) {
  $routeProvider
    .when('/introduction',
      {
        controller: 'Content',
        templateUrl: 'partials/introduction.html'
      })
    .when('/frames',
      {
        controller: 'Content',
        templateUrl: 'partials/frames.html'
      }
  ).otherwise({ redirectTo: '/introduction' });
});
