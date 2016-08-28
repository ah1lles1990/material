(function() {
  'use strict';

  angular.module('material')
    .directive('siteHeader', siteHeader);

  siteHeader.$inject = ['$state', '$translate', '$mdSidenav','translateService', 'UserLocalStorage', '_'];

  function siteHeader($state, $translate, $mdSidenav, translateService, UserLocalStorage, _) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      controller: function($scope, $element) {

        $scope.isOpen = false;
        $scope.selectedMode = 'md-scale';
        $scope.selectedDirection = 'down';

        $scope.change_language = function(ln) {
          var lan = _.findWhere($scope.languages_list, {ln: ln});
          $scope.current_language = lan.label;
          $translate.use(ln);
          $scope.$emit('change_language');
          UserLocalStorage.save_item('language', ln);
        }

        $scope.languages_list = [
          {
            ln: 'ru_RU',
            label: 'RU'
          },
          {
            ln: 'en_US',
            label: 'EN'
          }
        ];
        $scope.change_language($translate.use());

        $scope.toggleRight = buildToggler('left');

        $scope.isOpenRight = function(){
          return $mdSidenav('left').isOpen();
        };

        function buildToggler(navID) {
          return function() {
            $mdSidenav(navID)
              .toggle()
              .then(function () {
              });
          }
        }

        $scope.close = function () {
          $mdSidenav('left').close()
            .then(function () {
            });
        };

        $scope.$on('$stateChangeSuccess', function() {
          $scope.close();
        });

      }
    }
  }

})();