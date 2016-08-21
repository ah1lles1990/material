(function() {
  'use strict';

  angular.module('material')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$state', '$timeout', '$window'];

  function MainController($scope, $state, $timeout, $window) {

    var vm = this;

    vm.login_animation = false;
    vm.toggle_preloader = false;
    vm.site_header = false;

    $scope.$on('login_animation', function() {
        vm.login_animation = true;
        $timeout(function() {
          vm.login_animation = false;
        }, 2000);
    });

    $scope.$on('toggle_preloader', function (bool) {
      vm.toggle_preloader = bool;
    });

    $scope.$on('$stateChangeSuccess', function() {
      $scope.toggle_header(true);
    });

    $scope.toggle_header = function(bool) {
      vm.site_header = bool;
    }

  }

})();