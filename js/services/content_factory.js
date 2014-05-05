Resume.factory('contentFactory', ['$http', function($http) {

    var urlBase = 'http://kainlite.herokuapp.com/api/frames.json';
    var contentFactory = {};

    contentFactory.getWorks = function () {
        return $http.get(urlBase + '?type=works' );
    };

    contentFactory.getStudies = function (id) {
        return $http.get(urlBase + '?type=studies');
    };

    return contentFactory;
}]);
