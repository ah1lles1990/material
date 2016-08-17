(function() {
  'use strict';

  angular.module('material')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$scope', '$state', 'UserLocalStorage', 'usersApi', 'flashMethods', '_'];

  function SignInController($scope, $state, UserLocalStorage, usersApi, flashMethods, _) {

    var vm = this;

    vm.user_remember = false;

    vm.login_user = function() {
      if ($scope.signInForm.$valid) {
        console.log(vm.user);
        usersApi.users_list().then(function(response) {
          console.log(response);
          var users = response.data;
          _.map(users, function(user, index) {
            if (user.email === vm.user.email && user.password === vm.user.password) {
              var user_info = {id: index, role: user.role};
              if (vm.user_remember) {
                UserLocalStorage.user_login('remember', user_info);
              } else {
                UserLocalStorage.user_login('session', user_info);
              }
              console.log(user.role )
              if (user.role === 'admin') {
                  $state.go('admin');
              } else {
                $state.go('user_profile');
              }
            }
          });
        });
      }
    }

  }


})();