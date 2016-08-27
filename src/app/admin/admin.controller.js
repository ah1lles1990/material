(function() {
  'use strict';

  angular.module('material')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$scope', '$state', '$translate', '$stateParams', '$mdDialog', 'UserLocalStorage', 'translateService', 'usersApi'];

  function AdminController($scope, $state, $translate, $stateParams, $mdDialog, UserLocalStorage, translateService, usersApi) {

    var
      vm = this,
      translate = {},
      user_id = $stateParams.user_id;

    $scope.$on('language_change_success', function () {
      translate = translateService.create(['res_error', 'email', 'name', 'password', 'role', 'remove_user_title',
      'remove_user_content', 'remove_user_confirm', 'remove_user_cancel']);
    });

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

    vm.removeUser = function(user_id) {
      var confirm = $mdDialog.confirm()
        .title(translate.remove_user_title)
        .textContent(translate.remove_user_content)
        .ok(translate.remove_user_confirm)
        .cancel(translate.remove_user_cancel);
      $mdDialog.show(confirm).then(function() {
        usersApi.remove_user(user_id).then(
          function(response) {
            console.log(response);
            delete vm.users_list[user_id];
          },
          function() {
            flashMethods.dangerAlert(translate.res_error);
          }
        )
      });
    }

  }

})();