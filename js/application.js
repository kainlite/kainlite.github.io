var Resume = angular.module('Resume', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);

Resume.config(function ($routeProvider) {
  $routeProvider
    .when('/introduction',
      {
        controller: 'contentController',
        templateUrl: 'partials/introduction.html'
      }).otherwise({ redirectTo: '/introduction' });
});
