(function() {
  'use strict';

  angular.module('material')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', '$state', 'translateService', 'dialogMethods', 'flashMethods', 'UserLocalStorage', 'usersApi'];

  function SignUpController($scope, $state, translateService, dialogMethods, flashMethods, UserLocalStorage, usersApi) {

    var
      vm = this,
      regExp = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/g,
      translate = {};

    vm.confirm_password = '';
    vm.passwords_not_match = false;

    translate = translateService.create(['email_already_exists', 'res_error']);

    vm.validate_email = function() {
      var email_valid = $scope.signUpForm.email.$viewValue.search(regExp) !== -1;
      $scope.signUpForm.email.$setValidity('required', email_valid);
    }

    vm.validate_password = function() {
      var password_valid = $scope.signUpForm.password.$viewValue === $scope.signUpForm.confirm_password.$viewValue;
      $scope.signUpForm.confirm_password.$setValidity('required', password_valid);
    }

    vm.add_user = function() {
      if (!$scope.signUpForm.$valid) return false;

      usersApi.users_list()
        .then(
          function(response) {
            var
              users_list = response.data,
              user = _.findWhere(users_list, {email: vm.user.email});

            if (user)
              return flashMethods.dangerAlert(translate.email_already_exists);

            vm.user.role = 'customer';
            usersApi.add_user(vm.user).then(function(response) {
              var user = {id: response.data.name, role: vm.user.role};
              UserLocalStorage.user_login('session', user);
              $state.go('done');
            });
          },
          function(response) {
            flashMethods.dangerAlert(translate.res_error);
          }
        );
    }

    vm.login = function() {
      $scope.$emit('login_animation');
      $state.go('user_profile');
    }

  }

})();
