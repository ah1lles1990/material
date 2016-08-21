(function() {
  'use strict';

  angular.module('material')
    .controller('AdminController', AdminController);

  AdminController.$inject = ['$scope', '$state', 'UserLocalStorage', 'usersApi'];

  function AdminController($scope, $state, UserLocalStorage, usersApi) {

    var vm = this;

    vm.table_columns = ['email', 'name', 'password', 'role'];

  }

})();