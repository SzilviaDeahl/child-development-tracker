app.controller('MainController', function ($scope, ProfileService) {

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
    console.log(child);
    ProfileService.create(child).then(function (response) {
      console.log("DONZO");
    });
  };
});
