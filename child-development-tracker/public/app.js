var app = angular.module('myTracker', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/profiles', {
    templateUrl: '/partials/profile.html',
    controller: 'MainController'
  })
  .when('/profiles/:id/edit', {
    templateUrl: '/partials/edit.html',
    controller: 'MainController'
  })
});


// create a show route for child
// tell it what template to render
