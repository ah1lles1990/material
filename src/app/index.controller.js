(function() {
  'use strict';

  angular.module('material')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$timeout'];

  function MainController($scope, $timeout) {

    var vm = this;

    vm.login_animation = false;

    $scope.$on('login_animation', function() {
        vm.login_animation = true;
        $timeout(function() {
          vm.login_animation = false;
        }, 2000);
    });

  }

})();