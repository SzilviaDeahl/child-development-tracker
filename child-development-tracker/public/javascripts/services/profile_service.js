app.factory('ProfileService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/tracker').then(function (response) {
        return response.data;
      })
    }
  }
})
