(function(){
  'use strict';

  angular.module('material')
    .config(translateProviderConfig);

  /** @ngInject */
  function translateProviderConfig($translateProvider){
    var
      ru_RU = {
        sign_up_title: 'Регистрация',
        sign_in_title: 'Войти',
        label_name: 'Имя',
        label_email: 'E-mail',
        label_password: 'Пароль',
        label_confirm_password: 'Подтвердите пароль',
        required_field: 'Это поле нужно заполнить!',
        required_password_field: 'Пароль слишком длинный!',
        required_password_confirm: 'Пароли не совпадают!',
        remember_me: 'Запомнить меня',
        sign_in_btn: 'Войти',
        sign_up_btn: 'Регистрация',
        registration_was_complited: 'Регистрация успешно завершена!',
        click_to_login: 'Кликните ниже, чтобы войти в свой аккаунт.',
        btn_to_login: 'Войти',
        back: 'Назад'
      },
      en_US = {
        sign_up_title: 'Registration',
        sign_in_title: 'Sign in',
        label_name: 'Name',
        label_email: 'E-mail',
        label_password: 'Password',
        label_confirm_password: 'Confirm password',
        required_field: 'This is required!',
        required_password_field: 'That is too long!',
        required_password_confirm: 'Passwords is not match!',
        remember_me: 'Remember me',
        sign_in_btn: 'Sign in',
        sign_up_btn: 'Sign up',
        registration_was_complited: 'Registration was successfully!',
        click_to_login: 'Click below to login.',
        btn_to_login: 'Login',
        back: 'Back'
      }

    $translateProvider.translations('ru_RU', ru_RU)
    $translateProvider.translations('en_US', en_US);
  }

})();
