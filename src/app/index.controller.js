(function() {
  'use strict';

  angular.module('material')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$state', '$translate', 'UserLocalStorage', 'usersApi'];

  function MainController($scope, $state, $translate, UserLocalStorage, usersApi) {

    var vm = this;

    // vm.current_user;
    // vm.users;

    // if (angular.isUndefined(vm.users)) {
    //   auth.get_users().then(function(response) {
    //     vm.users = response.data;
    //     console.log(vm.users);
    //     $scope.get_current_user();
    //   });
    // } 

    // $scope.get_current_user = function() {
    //   var user = UserLocalStorage.get_user_login();
    //   _.each(vm.users, function(value, key, list) {
    //     console.log(user);
    //     vm.current_user = user.id == key ? list[key] : {};
    //   });
    //   console.log(vm.current_user);
    //   return vm.current_user;
    // }

  }

})();