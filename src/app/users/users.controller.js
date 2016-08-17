(function() {
  'use strict';

  angular.module('material')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$scope', '$state', 'dialogMethods', 'UserLocalStorage', 'usersApi'];

  function UsersController($scope, $state, dialogMethods, UserLocalStorage, usersApi) {

    var
      vm = this,
      user_id = UserLocalStorage.get_user_login().id;

    usersApi.get_current_user(user_id).then(
      function(response) {
        console.log(response);
        vm.current_user = response.data;
      }
    );

    vm.users_list = usersApi.users_list().then(
      function(response) {
         console.log(response);
         vm.users = response.data;
      }
    );

  }


})();