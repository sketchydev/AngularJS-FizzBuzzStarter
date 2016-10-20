'use strict';

describe('Given A FizzBuzz Controller', function() {
  var controller, scope;

  beforeEach(module('myApp.fizzBuzz'));

  beforeEach(inject(function($injector, $controller, $rootScope){
    scope = $rootScope.$new();
    controller =  $controller('FizzBuzzController', {$scope:scope});
  }));

  it("sample test", function(){
    expect(true).toBe(true);
  });

});