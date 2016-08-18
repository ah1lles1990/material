(function() {
  'use strict';

  angular.module('material')
    .config(config)
    .config(httpProviderConfig)
    .config(translateProviderConfig);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  function httpProviderConfig($logProvider, $httpProvider) {
    $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    $httpProvider.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
    $httpProvider.interceptors.push(beautifyInterceptor);
  }

  function beautifyInterceptor($q, Preloader) {
    return {
      request: function(config) {
        Preloader.openPreloader();
        return config;
      },

      requestError: function(config) {
        Preloader.closePreloader();
        return $q.reject(config);
      },

      response: function(res) {
        Preloader.closePreloader();
        return res;
      },

      responseError: function(res) {
        Preloader.closePreloader();
        return $q.reject(res);
      }
    }
  }

  function translateProviderConfig($translateProvider){

    $translateProvider.useSanitizeValueStrategy('sanitize');

    $translateProvider.preferredLanguage('ru_RU');
  }

})();
