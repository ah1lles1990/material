(function() {
  'use strict';

  angular.module('material')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('games', {
        url: '/games',
        templateUrl: 'app/games/games.html',
        controller: 'GamesController',
        controllerAs: 'games'
      })
      .state('easter_egg', {
        url: '/games/easter_egg',
        templateUrl: 'app/games/easter_egg/index.html',
        controller: 'EasterEggController',
        controllerAs: 'egg'
      })
      .state('breakout', {
        url: '/games/breakout',
        templateUrl: 'app/games/breakout/index.html',
        controller: 'BreakoutController',
        controllerAs: 'breakout'
      });
  }

})();