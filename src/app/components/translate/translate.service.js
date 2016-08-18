(function() {
  'use strict';

  angular.module('material')
    .factory('translateService', translateService);

  translateService.$inject = ['$translate', '_'];

  function translateService($translate, _) {

    var translateService = {};

    translateService.create = function(array_keys) {
      if (!angular.isArray(array_keys)) return {};

      var obj = {};

      $translate(array_keys).then(function (translations) {
        _.each(array_keys, function(key) {
          obj[key] = translations[key];
        });
      });

      return obj;
    }

    return translateService;
  }

})();