(function() {
  'use strict';

  angular
    .module('material')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/auth/auth.html',
        controller: function($scope){
          $scope.toggle_header(false);
        },
        resolve: {
          auth: function ($state, $timeout, UserLocalStorage) {
            var user = UserLocalStorage.get_user_login();
            if (UserLocalStorage.get_user_login()) {
              $timeout(function() {
                if (user.role === 'admin') {
                  $state.go('admin');
                } else {
                  $state.go('user_profile');
                }
              }, 0);
            }
          }
        }
      })
      .state('logout', {
        url: '/logout',
        resolve: {
          auth: function ($state, $timeout, UserLocalStorage) {
            $timeout(function() {
              UserLocalStorage.user_sign_out();
              $state.go('home') 
            }, 0);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
