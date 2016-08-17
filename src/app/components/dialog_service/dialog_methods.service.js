(function() {
  'use strict';

  angular.module('material')
    .factory('dialogMethods', dialogMethods);

  dialogMethods.$inject = ['$mdDialog', '$mdMedia'];

  function dialogMethods($mdDialog, $mdMedia) {

    var dialogMethods = {};

    dialogMethods.createDialog = function(title, content, label) {

      var confirm = $mdDialog.alert()
        .title(title)
        .textContent(content)
        .ariaLabel('Lucky day')
        .ok(label)
      return $mdDialog.show(confirm);
    }

    return dialogMethods;
  }

})();