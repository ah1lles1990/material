(function() {
  'use strict';

  angular.module('material')
    .factory('usersApi', usersApi);

  usersApi.$inject = ['$cacheFactory', '$http', '$q', 'mainApi'];

  function usersApi($cacheFactory, $http, $q, mainApi) {

    var
      usersApi = {},
      cache = $cacheFactory('users_cache'),
      users,
      current_user;

    usersApi.users_list = function() {
      var
        url = 'users',
        params = {},
        users = cache.get('users'),
        data = {};

      if (users) {
        data = angular.fromJson(users);
        return $q.when({data: data});
      } else {
        return mainApi.get(url, params).then(function(response) {
          cache.put('users', angular.toJson(response.data));
          return response;
        });
      }
    }

    usersApi.get_current_user = function(user_id) {
      var
        url = 'users/' + user_id,
        params = {},
        current_user = cache.get('current_user'),
        data;

      if (current_user) {
        data = angular.fromJson(current_user);
        return $q.when({data: data});
      } else {
        return mainApi.get(url, params).then(function(response) {
          cache.put('current_user', angular.toJson(response.data));
          return response;
        });
      }
      
    }

    usersApi.add_user = function(user) {
      var
        url = 'users',
        params = user;

      return mainApi.post(url, params);
    }

    return usersApi;
  }


})();