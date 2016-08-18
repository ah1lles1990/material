(function() {
  'use strict';

  angular.module('material')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$timeout'];

  function MainController($scope, $timeout) {

    var vm = this;

    vm.login_animation = false;
    vm.toggle_preloader = false;

    $scope.$on('login_animation', function() {
        vm.login_animation = true;
        $timeout(function() {
          vm.login_animation = false;
        }, 2000);
    });

    $scope.$on('toggle_preloader', function (bool) {
      vm.toggle_preloader = bool;
    });

  }

})();