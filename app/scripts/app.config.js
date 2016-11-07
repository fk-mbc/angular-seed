(function (angular) {

  'use strict';

  angular
    .module('app').config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          views: {
            'main': {
              templateUrl: 'scripts/home/home.controller.html',
              controller: 'HomeCtrl',
              controllerAs: 'home'
            }
          }
        })
        .state('about', {
          url: '/about',
          views: {
            'main': {
              templateUrl: 'scripts/about/about.controller.html',
              controller: 'AboutCtrl',
              controllerAs: 'about'
            }
          }
        });

    });

})(angular);
