(function() {
  'use strict';

  angular.module('material')
    .directive('siteHeader', siteHeader);

  siteHeader.$inject = ['$state', '$window', '$timeout', 'UserLocalStorage', '_'];

  function siteHeader($state, $window, $timeout, UserLocalStorage, _) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      link: function($scope, $element) {



      }
    }
  }

})();