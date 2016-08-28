(function() {
  'use strict';

  angular.module('material')
    .controller('GamesController', GamesController);

  GamesController.$inject = ['$scope', '$state', '$translate', '$stateParams', '$mdDialog', 'UserLocalStorage', 'translateService', 'usersApi'];

  function GamesController($scope, $state, $translate, $stateParams, $mdDialog, UserLocalStorage, translateService, usersApi) {

    var
      vm = this,
      translate = {};

    $scope.$on('language_change_success', function () {
      translate = translateService.create(['res_error']);
    });

    vm.gamel_list = [
      {
        name: 'Easter Egg',
        state: 'easter_egg'
      },
      {
        name: 'Breakout',
        state: 'breakout'
      }
    ];

  }

})();