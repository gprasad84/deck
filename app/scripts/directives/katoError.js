'use strict';

require('../app');
var angular = require('angular');

angular.module('deckApp')
  .directive('katoError', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/katoError.html',
      scope: {
        errorWrapper: '=',
        title: '@'
      }
    };
  }
);
