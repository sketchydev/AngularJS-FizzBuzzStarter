(function(){
    'use strict';

    angular.module('myApp.fizzBuzz',[])
        .controller('FizzBuzzController', fizzBuzzController);

    fizzBuzzController.$inject = ['$scope'];

    function fizzBuzzController($scope){
        var vm = this;

        vm.playFizzBuzz = function(){
            var fizzBuzzArray = [];

            for(var i=1; i<=100; i++){
                fizzBuzzArray.push(vm.convert(i));
            }

            console.log(fizzBuzzArray);

            return fizzBuzzArray;
        };

        vm.convert = function(input)
        {
            var returnVal = '';

            if(input%3 === 0)
                returnVal = 'Fizz';

            if(input%5 === 0)
                returnVal = returnVal + 'Buzz';

            return returnVal || input;
        };
    }
})();
