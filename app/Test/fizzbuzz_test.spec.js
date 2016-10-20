'use strict';

describe('Given A FizzBuzz Controller', function() {
  var controller;

  beforeEach(module('myApp.fizzBuzz'));

  beforeEach(inject(function($injector, $controller){
    controller =  $controller('FizzBuzzController');
  }));

  describe('When convert is called with 1', function(){
    var output;
    beforeEach(function(){
      output = controller.convert(1);
    });
    it('then 1 is passed back out', function() {

      expect(output).toBe(1);
    });
  });

  describe('When convert is called with 3', function(){
    var output;
    beforeEach(function(){
      output = controller.convert(3);
    });
    it('then 1 is passed back out', function() {

      expect(output).toBe('Fizz');
    });
  });

  describe('When convert is called with 5', function(){
    var output;
    beforeEach(function(){
      output = controller.convert(5);
    });
    it('then Buzz is passed back out', function() {

      expect(output).toBe('Buzz');
    });
  });

  describe('When convert is called with 15', function(){
    var output;
    beforeEach(function(){
      output = controller.convert(15);
    });
    it('then Buzz is passed back out', function() {

      expect(output).toBe('Fizz Buzz');
    });
  });

});