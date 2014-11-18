/**
 * User package module.
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './services'], function(angular) {
  'use strict';

  return angular.module('xblog.user', ['ngCookies', 'ngRoute', 'user.routes', 'user.services']);
});
