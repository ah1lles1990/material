(function() {
  'use strict';

  angular.module('material')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$scope', '$state', '$stateParams', 'UserLocalStorage', 'translateService', 'usersApi'];

  function AdminController($scope, $state, $stateParams, UserLocalStorage, translateService, usersApi) {

    var
      vm = this,
      translate = {},
      user_id = $stateParams.user_id;

    vm.table_columns = ['email', 'name', 'password', 'role'];

    translate = translateService.create(['res_error']);

    if ($state.current.name === 'user') {
      usersApi.get_current_user(user_id).then(
        function(response) {
          vm.user = response.data;
        },
        function() {
          flashMethods.dangerAlert(translate.res_error);
        }
      );
    } else {
      usersApi.users_list().then(
        function(response) {
          vm.users_list = response.data;
          console.log(vm.users_list);
        },
        function() {
          flashMethods.dangerAlert(translate.res_error);
        }
      );
    }

    vm.viewUser = function(user_id){
      $state.go('user', { user_id: user_id });
    }

  }

})();