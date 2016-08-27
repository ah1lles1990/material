(function(){
  'use strict';

  angular.module('material')
    .config(translateProviderConfig);

  /** @ngInject */
  function translateProviderConfig($translateProvider){
    var
      ru_RU = {
        header_change_language: 'Изменить язык',
        header_profile: 'Ваш профиль',
        header_log_out: 'Выйти',
        header_menu: 'Меню'
      },
      en_US = {
        header_change_language: 'Change language',
        header_profile: 'Your profile',
        header_log_out: 'Log out',
        header_menu: 'Menu'
      }

    $translateProvider.translations('ru_RU', ru_RU);
    $translateProvider.translations('en_US', en_US);
  }

})();