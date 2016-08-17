(function() {
  'use strict';

  angular.module('material')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('user_profile', {
        url: '/profile',
        templateUrl: 'app/users/partials/profile.html',
        controller: 'UsersController',
        controllerAs: 'usersCtrl'
      });
  }

 })();