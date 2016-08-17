(function() {
  'use strict';

  angular.module('material')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log, $state, $timeout, UserLocalStorage) {

    $log.debug('runBlock end');

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      var user = UserLocalStorage.get_user_login();
      if (!user || !Object.keys(user).length) {
        if (toState.name === 'sign_in' || toState.name === 'sign_up' || toState.name === 'home') {
          return false;
        } else {
          $timeout(function() { $state.go('home') }, 0);
        }
      } else {
        if (toState.name === 'sign_in' || toState.name === 'sign_up') {
          $timeout(function() { $state.go('home') }, 0);
        }
      }
    });
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log(UserLocalStorage.get_user_login());
    });
  }
  

})();
