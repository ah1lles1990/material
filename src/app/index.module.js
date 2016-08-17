(function() {
  'use strict';

  function _($window) {
    return $window._; // assumes underscore has already been loaded on the page
  }

  angular.module('underscore', [])
    .factory('_', _);

  angular.module('material', [
      'underscore', 'ngSanitize', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages',
      'ui.router', 'ngMaterial', 'toastr', 'pascalprecht.translate', 'ngFlash'
    ]);

})();
