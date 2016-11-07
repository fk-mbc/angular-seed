(function (angular) {
    'use strict';

    angular
        .module('app')
        .controller('MainController', function () {
            var vm = this;

            vm.routes = [
                { url: 'home', name: 'Home' },
                { url: 'about', name: 'About' }
            ];
        });

})(angular);
