app.factory('ProfileService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/profiles').then(function (response) {
        return response.data;
      })
    },
    create: function (profile) {
      // make an http post request to your api and send the profile to be
      // inserted into your database
    }
  }
})
