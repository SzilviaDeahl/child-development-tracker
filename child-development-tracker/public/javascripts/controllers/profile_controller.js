var app = angular.module('myTracker', ['ngRoute']);

app.controller('MainController', function ($scope, ProfileService) {
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
  $scope.children = [{}];
  $scope.createChild = function () {
    $scope.children.push($scope.child);
    $scope.showForm = !$scope.showForm;
    $scope.child = {};
    console.log($scope.children);
    console.log($scope.child);
  }

  ProfileService.all().then(function (children) {
    $scope.children = children;
  })
})

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/profile.html',
    controller: 'MainController'
  })
});
