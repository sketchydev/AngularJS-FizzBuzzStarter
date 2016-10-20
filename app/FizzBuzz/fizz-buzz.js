(function(){
    'use strict';

    angular.module('myApp.fizzBuzz',[])
        .controller('FizzBuzzController', fizzBuzzController);

    fizzBuzzController.$inject = ["$scope"];

    function fizzBuzzController($scope){
        var vm = this;

        vm.convert = function(input)
        {

        };
    }
})();