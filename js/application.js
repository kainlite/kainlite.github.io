var Resume = angular.module('Resume', ['ui.bootstrap', 'ngRoute', 'chieffancypants.loadingBar', 'ngAnimate']);

Resume.config(function ($routeProvider) {
  $routeProvider
    .when('/introduction',
      {
        controller: 'contentController',
        templateUrl: 'partials/introduction.html'
      }).otherwise({ redirectTo: '/introduction' });
});

Resume.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
