'use strict';

/**
 * @ngdoc overview
 * @name yomanApp
 * @description
 * # yomanApp
 *
 * Main module of the application.
 */
angular
  .module('yomanApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sampleroute', {
        templateUrl: 'views/sampleroute.html',
        controller: 'SamplerouteCtrl',
        controllerAs: 'sampleroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
