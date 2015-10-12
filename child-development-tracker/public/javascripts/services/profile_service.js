app.factory('ProfileService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/profiles').then(function (response) {
        return response.data;
      })
    },
    create: function (profile) {
      return $http.post('/api/profiles', profile).then(function (response) {
        if(response.data){
          return response.data;
        }
      })
    },
    show: function () {
      return $http.get('/partials').then(function (response) {
        return response.data
      })
    },
    // update: function () {
    //   return $http.post('/profiles/:id/edit').then(function (response) {
    //     return response.data;
    //   })
    // }
  }
})
