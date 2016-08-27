(function() {
  'use strict';

  angular.module('material')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$state', '$timeout', '$translate', 'UserLocalStorage'];

  function MainController($scope, $state, $timeout, $translate, UserLocalStorage) {

    var vm = this;

    vm.login_animation = false;
    vm.toggle_preloader = false;
    vm.site_header = false;

    var current_language = UserLocalStorage.get_item('language');
    if (current_language) $translate.use(current_language);

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

    $scope.$on('change_language', function() {
      $scope.$broadcast('language_change_success');
    });

    $scope.toggle_header = function(bool) {
      vm.site_header = bool;
    }

  }

})();