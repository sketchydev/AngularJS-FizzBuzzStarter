# AngularJS-FizzBuzzStarter
Cloned from [https://github.com/angular/angular-seed](https://github.com/angular/angular-seed)

This is intended to be a starter app to allow the old "FizzBuzz" problem to be approached using TDD with AngularJS, Karma Test Runner and Jasmine.

## Getting Started
Start by cloning the repo and installing the dependencies:

### Pre-reqs
* NodeJs [http://nodejs.org/](http://nodejs.org/)
(This is required for NPM)

###Installation
* Clone the repository using git
* Install the dependencies by running:
```
npm install
```
* run the following command to check all has worked
```
npm test
```
A browser window should pop up and the shell should display something like :
```
20 10 2016 11:21:45.340:WARN [karma]: No captured browser, open http://localhost:9876/
20 10 2016 11:21:45.349:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
20 10 2016 11:21:45.358:INFO [launcher]: Starting browser Chrome
20 10 2016 11:21:47.916:INFO [Chrome 53.0.2785 (Windows 8.1 0.0.0)]: Connected on socket 2CUajxhdioxhUyd1AAAA with id 92454752
Chrome 53.0.2785 (Windows 8.1 0.0.0): Executed 1 of 1 SUCCESS (0.026 secs / 0.021 secs)
```

## The Problem
FizzBuzz is based on a traditional childrens game to help with mathematical comprehension.  The basic premise is that children would sit in a circle and collectively count from 1 to 100 , taking it in turns to say each number.  However, to add some complexity, any number that is divisible by 3 should be replaced with the word "Fizz", and any number that is divisible by 5 should be replaced with the word "Buzz" and any number that is divisible by both 3 and 5, should be replaced with "Fizz Buzz".  Your goal is to replicate this game, by displaying the numbers 1 to 100 replacing the numbers with Fizz, Buzz or FizzBuzz where appropriate according to the rules above.

### Task 1
The problem statement above needs to be broken down into a set of testable scenarios.  These should take the form of "Given...When...Then".

### Task 2
Taking one scenario at a time, the Red-Green-Refactor approach to TDD should be taken:
* Write a test in Jasmine which will validate the scenario - this test should fail (Red)
* Write code to pass the test and ensure all existing tests still pass (Green)
* Refactor the code so that the tests still pass, but so that the code is structured according to agreed standards (Refactor)





