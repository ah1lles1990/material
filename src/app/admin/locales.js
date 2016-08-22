(function(){
  'use strict';

  angular.module('material')
    .config(translateProviderConfig);

  /** @ngInject */
  function translateProviderConfig($translateProvider){
    var
      ru_RU = {
        res_error: 'Произошла ошибка!'
      },
      en_US = {
        res_error: 'Error has been occurred!'
      }

    $translateProvider.translations('ru_RU', ru_RU)
    $translateProvider.translations('en_US', en_US);
  }

})();
