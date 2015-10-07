app.factory('PostsService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/profile').then(function (response) {
        return response.data;
      })
    }
  }
})
