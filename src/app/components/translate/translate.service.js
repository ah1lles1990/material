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
          obj[key] = $translate.use() == 'ru_RU' ? decode(translations[key]) : translations[key];
        });
      });

      return obj;
    }

    function decode(phrase) {
      var
        arr = phrase.split(';'),
        result = '', a, b, s, i, j;
      for (i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
          a = arr[i].split(' ');
          for (j = 0; j < a.length; j++) {
            if (a[j]) {
              b = a[j].slice(2);
              s = String.fromCharCode(parseInt(b));
              result += s;
            } else {
              result += ' ';
            }
          }
        } else {
          result += arr[i];
        }
      }
      console.log(result);
      return result;
    }

    return translateService;
  }

})();