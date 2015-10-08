var app = angular.module('myTracker', ['ngRoute']);

app.controller('MainController', function ($scope, ProfileService) {
  $scope.showForm = {
    add: false,
    smile: false,
    sound: false,
    head: false,
    roll: false,
    sit: false,
    crawl: false,
    helpStand: false,
    aloneStand: false,
    helpWalk: false,
    aloneWalk: false,
    word: false,
    song: false,
    story: false
  };
  $scope.showLogin = false;
  $scope.toggleForm = function (form) {
    $scope.showForm[form] = !$scope.showForm[form];
  }
  $scope.toggleLogin = function () {
    $scope.showLogin = !$scope.showLogin;
  }
  // $scope.submitPost = function () {
  //   $scope.posts.push($scope.post);
  //   $scope.post = {};
  // }
  $scope.createChild = function () {
    ProfileService.create($scope.child).then(function (response) {
      console.log("DONZO");
      // after db instert redirect user to the show page for the profile they
      // just created
    })
  }
});

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/profile.html',
    controller: 'MainController'
  })
});
