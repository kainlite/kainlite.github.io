Resume.controller('contentController', ['$scope', 'contentFactory',
  function($scope, contentFactory) {
    $scope.about = 'About me';
    $scope.head = 'Résumé';
    init();

    function init() {
      getBio();
      getWorks();
      getStudies();
    }

   function getBio() {
      contentFactory.getBio()
        .success(function(bio) {
          $scope.me = bio.me
          $scope.contact = bio.contact
          $scope.presentation = bio.presentation
        })
        .error(function(error){
          $scope.bio_status = 'Error retrieving bio info! ' + error.message;
        });
    }


    function getWorks() {
      contentFactory.getWorks()
        .success(function(works) {
          $scope.works = works;
        })
        .error(function(error){
          $scope.works_status = 'Error retrieving works info! ' + error.message;
        });
    }
    function getStudies() {
      contentFactory.getStudies()
        .success(function(studies) {
          $scope.studies = studies;
        })
        .error(function(error){
          $scope.studies_status = 'Error retrieving studies info! ' + error.message;
        });
    }
}]);
