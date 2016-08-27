(function() {
  'use strict';

  angular.module('material')
    .factory('usersApi', usersApi);

  usersApi.$inject = ['$cacheFactory', '$http', '$q', 'mainApi'];

  function usersApi($cacheFactory, $http, $q, mainApi) {

    var usersApi = {};

    usersApi.users_list = function() {
      var
        url = 'users',
        params = {};

      return mainApi.get(url, params);
    }

    usersApi.get_current_user = function(user_id) {
      var
        url = 'users/' + user_id,
        params = {};

      return mainApi.get(url, params);
    }

    usersApi.add_user = function(user) {
      var
        url = 'users',
        params = user;

      return mainApi.post(url, params);
    }

    usersApi.remove_user = function(user_id) {
      var
        url = 'users/' + user_id,
        params = {};

      return mainApi['delete'](url, params);
    }

    return usersApi;
  }


})();