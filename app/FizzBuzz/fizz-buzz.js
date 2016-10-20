(function(){
    'use strict';

    angular.module('myApp.fizzBuzz',[])
        .controller('FizzBuzzController', fizzBuzzController);

    function fizzBuzzController(){
        var vm = this;

        vm.convert = function(input)
        {
            if(input%3===0 && input%5===0) return 'Fizz Buzz';
            if(input%3===0) return 'Fizz';
            if(input%5===0) return 'Buzz';
            return input;
        };
    }
})();