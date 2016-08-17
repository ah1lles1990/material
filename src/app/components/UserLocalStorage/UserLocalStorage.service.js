(function() {
  'use strict';

  angular.module('material')
    .factory('UserLocalStorage', UserLocalStorage);

  function UserLocalStorage() {

    var UserLocalStorage = {};

    UserLocalStorage.save_item = function(key, obj) {
      if (key && obj) {
        localStorage.setItem(key, angular.toJson(obj));
      }
    }

    UserLocalStorage.get_item = function(key) {
      if (key) {
        var data = localStorage.getItem(key);
        if (data) {
          return angular.fromJson(data);
        }
      }
    }

    UserLocalStorage.remove_item = function(key) {
      if (key) {
        localStorage.removeItem(key);
      }
    }

    UserLocalStorage.user_login = function(type, user) {
      if (user && type) {
        if (type === 'session') {
          sessionStorage.setItem('user', angular.toJson(user));
        } else if (type === 'remember') {
          localStorage.setItem('user', angular.toJson(user));
        }
      }
    }

    UserLocalStorage.get_user_login = function() {
      var user = sessionStorage.getItem('user');
      if (user && Object.keys(user).length) {
        return angular.fromJson(user);
      }
      user = localStorage.getItem('user');
      if (user && Object.keys(user).length) {
        return angular.fromJson(user);
      }
    }

    UserLocalStorage.user_sign_out = function() {
      sessionStorage.removeItem('user');
      localStorage.removeItem('user');
    }

    return UserLocalStorage;
  }

})();