(function() {
  'use strict';

  angular.module('material')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$scope', '$state', 'translateService', 'UserLocalStorage', 'usersApi', 'flashMethods', '_'];

  function SignInController($scope, $state, translateService, UserLocalStorage, usersApi, flashMethods, _) {

    var
      vm = this,
      regExp = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/g,
      translate = {};

    vm.user_remember = false;

    translate = translateService.create(['not_valid_password', 'email_is_empty', 'res_error']);

    $scope.toggle_header(false);

    vm.validate_email = function() {
      var email_valid = $scope.signInForm.email.$viewValue.search(regExp) !== -1;
      $scope.signInForm.email.$setValidity('required', email_valid);
    }

    vm.login_user = function() {
      if (!$scope.signInForm.$valid) return false;

      usersApi.users_list()
        .then(
          function(response) {
            var
              users_list = response.data,
              user = {},
              user_info = {};

            _.map(users_list, function(value, key) {
              if (value.email === vm.user.email) {
                user_info.id = key;
                user_info.role = value.role;
                user = value;
              }
            });

            if (!Object.keys(user).length)
              return flashMethods.dangerAlert(translate.email_is_empty);

            if (user.password !== vm.user.password)
              return flashMethods.dangerAlert(translate.not_valid_password);

            if (vm.user_remember) {
              UserLocalStorage.user_login('remember', user_info);
            } else {
              UserLocalStorage.user_login('session', user_info);
            }

            $scope.$emit('login_animation');

            if (user.role === 'admin') {
              $state.go('admin');
            } else {
              $state.go('user_profile');
            }
          },
          function() {
            flashMethods.dangerAlert(translate.res_error);
          }
        );
      
    }

  }


})();