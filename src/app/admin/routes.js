(function() {
  'use strict';

  angular.module('material')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/partials/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      });
  }

})();