(function(){
  'use strict';

  angular.module('material')
    .factory('mainApi', mainApi);

  mainApi.$inject = ['$state', '$http', 'UserLocalStorage', '_'];

  function mainApi($state, $http, UserLocalStorage, _) {

    var
      urlBase = 'https://material-app.firebaseio.com/',
      main = {};

    _.each(['get', 'post', 'put', 'delete'], function(m){
      main[m] = function (url, _params) {

        var
          method = eval('$http.' + m + '(urlBase + url + ".json", m == "get" ? { params: _params } : _params);');

          method.then(
            function(response) {
              return response;
            },
            function(response){
              var user = UserLocalStorage.get_user_login()
              if (!user || !Object.keys(user).length) {
                $state.go('logout');
              }
              return response;
            }
          );

        return method
      };
    });

    return main;
  }


})();