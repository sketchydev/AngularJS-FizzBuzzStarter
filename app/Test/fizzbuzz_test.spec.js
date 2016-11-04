'use strict';

describe('Given A FizzBuzz Controller', function() {
  var controller, scope;

  beforeEach(module('myApp.fizzBuzz'));

  beforeEach(inject(function($injector, $controller, $rootScope){
    scope = $rootScope.$new();
    controller =  $controller('FizzBuzzController', {$scope:scope});
  }));

  describe('When the convert method is called', function(){
    describe('When a number not divisible by 3 or 5 is passed', function(){
      it("Then the number should be returned as is", function(){
        expect(controller.convert(1)).toBe(1);
        expect(controller.convert(2)).toBe(2);
        expect(controller.convert(4)).toBe(4);
        expect(controller.convert(7)).toBe(7);
      });
    });

    describe('When a number which is divisible by 3 is passed', function(){
      it('Then the text Fizz is returned', function(){
        expect(controller.convert(3)).toBe("Fizz");
        expect(controller.convert(6)).toBe("Fizz");
        expect(controller.convert(9)).toBe("Fizz");
        expect(controller.convert(12)).toBe("Fizz");
      });
    });

    describe('When a number which is divisible by 5 is passed', function(){
      it('Then the text Fizz is returned', function(){
        expect(controller.convert(5)).toBe("Buzz");
        expect(controller.convert(10)).toBe("Buzz");
        expect(controller.convert(20)).toBe("Buzz");
        expect(controller.convert(25)).toBe("Buzz");
      });
    });

    describe('When a number which is divisble by both 3 and 5 is passed', function(){
      it('Then the text FizzBuzz is returned', function(){
        expect(controller.convert(15)).toBe("FizzBuzz");
        expect(controller.convert(30)).toBe("FizzBuzz");
        expect(controller.convert(60)).toBe("FizzBuzz");
        expect(controller.convert(75)).toBe("FizzBuzz");
      });
    });

  });

  describe('When the play fizzbuzz method is called', function(){
      it("Then 100 numbers are returned", function(){
          expect(controller.playFizzBuzz().length).toEqual(100);
      });

      it("Then fizzbuzz text is printed for the required numbers", function(){
        var expectedOutput = [],
            actualOutput = controller.playFizzBuzz();

        for(var i=1; i<=100; i++){
          expectedOutput.push(controller.convert(i));
        }

        expect(actualOutput).toEqual(expectedOutput);
      });
  });
});
