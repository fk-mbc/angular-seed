(function (angular) {

  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the app
   */
  angular.module('app')
    .controller('HomeCtrl', function () {
      var vm = this;

      vm.title = "Weclome to the Seed";
    });

})(angular);
