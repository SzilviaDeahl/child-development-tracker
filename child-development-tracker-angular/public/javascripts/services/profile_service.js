app.factory('ProfileService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/profiles').then(function (response) {
        return response.data;
      })
    },
    create: function (profile) {
      console.log("i'm here in services");
      return $http.post('/api/profiles', profile).then(function (response) {
        if(response.data){
          console.log('I am created');
        }
      })
    },
  }
})
