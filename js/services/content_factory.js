Resume.factory('contentFactory', ['$http', function($http) {

    var urlBase = 'http://kainlite.herokuapp.com/api/';
    var contentFactory = {};

    contentFactory.getWorks = function () {
        return $http.get(urlBase + '/frames.json?kind=works' );
    };

    contentFactory.getStudies = function () {
        return $http.get(urlBase + '/frames.json?kind=studies');
    };

    contentFactory.getBio = function() {
        return $http.get(urlBase + '/bio.json');
    };

    return contentFactory;
}]);
