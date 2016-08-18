(function() {
  'use strict';

  angular.module('material')
    .factory('flashMethods', flashMethods);

  flashMethods.$inject = ['Flash'];

  function flashMethods(Flash){

    var flashMethods = {};

    flashMethods.successAlert = function (message, timeout, cl, id) {
      return flashMethods.createAlert('success', message, timeout, cl, id)
    };

    flashMethods.infoAlert = function (message, timeout, cl, id) {
      return flashMethods.createAlert('info', message, timeout, cl, id)
    };

    flashMethods.warningAlert = function (message, timeout, cl, id) {
      return flashMethods.createAlert('warning', message, timeout, cl, id)
    };

    flashMethods.dangerAlert = function (message, timeout, cl, id) {
      return flashMethods.createAlert('danger', message, timeout, cl, id)
    };

    flashMethods.createAlert = function(type, message, timeout, cl, id) {
      return Flash.create(
        type,
        '<div><i class="icon icon-' + type + '"></i><p class="flash-text">' + message + '</p></div>',
        timeout || 5000,
        { 'class': cl, id: id },
        true
      );
    };

    return flashMethods;
  }

})();