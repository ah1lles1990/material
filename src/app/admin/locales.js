(function(){
  'use strict';

  angular.module('material')
    .config(translateProviderConfig);

  /** @ngInject */
  function translateProviderConfig($translateProvider){
    var
      ru_RU = {
        res_error: 'Произошла ошибка!',
        remove_user_title: 'Удалить пользователя',
        remove_user_content: 'Вы уверены, что хотите удалить данного пользователя?',
        remove_user_confirm: 'Удалить',
        remove_user_cancel: 'Отмена',
        email: 'E-mail',
        name: 'Имя',
        password: 'Пароль',
        role: 'Роль',
        admin_edit: 'Редактировать',
        admin_remove: 'Удалить'
      },
      en_US = {
        res_error: 'Error has been occurred!',
        remove_user_title: 'Remove user',
        remove_user_content: 'Are you sure you want to delete this user?',
        remove_user_confirm: 'Remove',
        remove_user_cancel: 'Cancel',
        email: 'E-mail',
        name: 'Name',
        password: 'Password',
        role: 'Role',
        admin_edit: 'Edit',
        admin_remove: 'Remove'
      }

    $translateProvider.translations('ru_RU', ru_RU);
    $translateProvider.translations('en_US', en_US);
  }

})();
