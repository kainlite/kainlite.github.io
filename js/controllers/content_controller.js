Resume.controller('contentController', function($scope, contentFactory) {
  $scope.me = 'Pepe Pepe'
  $scope.contact = 'pepe@gmail.com'
  $scope.about = 'About me';
  $scope.head = 'Résumé';
  $scope.presentation = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  $scope.work_frames = contentFactory.getWorks();
  $scope.study_frames = contentFactory.getStudies();
});
