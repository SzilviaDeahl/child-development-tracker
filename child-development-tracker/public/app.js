var app = angular.module('myTracker', []);
app.controller('MainController', function ($scope) {
  $scope.showForm = false;
  $scope.showLogin = false;
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  $scope.toggleLogin = function () {
    $scope.showLogin = !$scope.showLogin;
  }
  // $scope.submitPost = function () {
  //   $scope.posts.push($scope.post);
  //   $scope.post = {};
  // }
});
