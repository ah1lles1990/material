(function() {
  'use strict';

  angular.module('material')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', '$state', 'dialogMethods', 'UserLocalStorage', 'usersApi'];

  function SignUpController($scope, $state, dialogMethods, UserLocalStorage, usersApi) {

    var vm = this;

    vm.confirm_password = '';
    vm.passwords_not_match = false;

    vm.add_user = function() {
      if ($scope.signUpForm.$valid) {
        if (vm.user.password === vm.confirm_password) {
          vm.user.role = 'customer';
          vm.passwords_not_match = false;
          usersApi.add_user(vm.user).then(function(response) {
            console.log(response);
            var user = {id: response.data.name, role: vm.user.role}
            UserLocalStorage.user_login('session', user);
            // dialogMethods.createDialog(
            //   'Registration successfully completed',
            //   'To sign in, click the button below',
            //   'Sign in')
            //   .then(function(a) {
            //     if (a) $state.go('user_profile');
            // });
            $state.go('done');
          });
        } else {
          console.log(vm.user);
          console.log(vm.confirm_password);
          vm.passwords_not_match = true;
        }
      }
    }

  }

})();
