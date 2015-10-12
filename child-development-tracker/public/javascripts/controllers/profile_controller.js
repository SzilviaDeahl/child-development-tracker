app.controller('MainController', function ($scope, ProfileService, $location) {

  ProfileService.all().then(function (profiles) {
   $scope.profiles = profiles;
  });

  $scope.toggleForm = function (form) {
    $scope.showForm[form] = !$scope.showForm[form];
  };

  $scope.showForm = {
    addKid: false,
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

  $scope.toggleLogin = function () {
    $scope.showLogin = !$scope.showLogin;
  };

  var child = {};
  $scope.createChild = function (child) {
    ProfileService.create(child).then(function (response) {
      console.log(response);
      $scope.child = response;
      console.log($scope.child._id);
      // redirect to somewhere
      $location.path('/profiles');
    });
  };
  // $scope.editChild = function (child) {
  //   ProfileService.update(_id: $scope.childId).then(function (response) {
  //     // $scope.childId = response._id;
  //     // console.log($routeParams.id);
  //     $location.path('/profiles');
  //   });
  // };
});
