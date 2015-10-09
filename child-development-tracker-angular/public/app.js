var app = angular.module('myTracker', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/partials/profile.html',
    controller: 'MainController'
  })
});
