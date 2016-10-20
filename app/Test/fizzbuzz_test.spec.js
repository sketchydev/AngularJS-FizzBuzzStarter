'use strict';

describe('myApp.FizzBuzz module', function() {

  beforeEach(module('myApp.fizzBuzz'));

  describe('FizzBuzz controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('FizzBuzz');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});