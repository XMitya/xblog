/** Common helpers */
define(['angular', './language'], function(angular) {
  'use strict';

  var mod = angular.module('common.helper', ['common.language']);
  mod.service('helper', function(language) {
    return {
      sayHi: function() {
        return language.HELLO;
      }
    };
  });
  return mod;
});
