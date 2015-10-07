app.controller('MainController', function ($scope, ProfileService) {
  $scope.show = false;

  $scope.showForm = function () {
    $scope.show = !$scope.show;
  }
  ProfileService.all().then(function (posts) {
    $scope.posts = posts;
  })
})
