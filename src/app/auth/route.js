(function() {
  'use strict';

  angular.module('material')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('sign_in', {
        url: '/sign_in',
        templateUrl: 'app/auth/sign_in/partials/sign_in.html',
        controller: 'SignInController',
        controllerAs: 'sign_in'
      })
      .state('sign_up', {
        url: '/sign_up',
        templateUrl: 'app/auth/sign_up/partials/sign_up.html',
        controller: 'SignUpController',
        controllerAs: 'sign_up'
      })
      .state('done', {
        url: '/done',
        templateUrl: 'app/auth/sign_up/partials/done.html',
        controller: 'SignUpController',
        controllerAs: 'sign_up'
      });
  }

})();