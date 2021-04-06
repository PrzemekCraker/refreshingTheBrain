//An arrow function is a function defined using the fat arrow syntax =>
const sum = (number1, number2) => {
    return number1 + number2;
  }

//A bound function is a function created from invoking the method myFunc.bind(thisArg, arg1, ..., argN) upon a function
function originalFunction() {
    // ...
  }
  
  const boundFunction = originalFunction.bind({ prop: 'Value' });

//A regular function is a simple JavaScript function defined using function keyword or using a shorthand definition on an object
function regularFunction(who) {
    return `Hello, ${who}!`;
  }
  
  const object = {
    anotherRegularFunction(who) {
      return `Good bye, ${who}!`
    }
  };

//constructor() is a special method inside of a class that initializes the class instance
class SomeClass() {
    constructor(prop) {
      this.prop = prop;
    }
  }

//The outermost scope is the top scope that doesn’t have an outer scope
let a = 1;

function someFunction() {
  // someFunction() scope
  // Not the outermost scope
  let b = 1;
}

//The outer function contains another function within its scope
// outerFunction() is the outer function of myFunction()
function outerFunction() {

    function myFunction() {
  
    }
  }

//The global object is the object that always exists in the global scope. window is the global object in a browser environment, global in Node environment.

//Invocation of a function is just calling the function with some arguments
function sum(number1, number2) {
    return number1 + number2;
  }
  sum(1, 3);           // Invocation
  sum.call({}, 3, 4);  // Invo
  sum.apply({}, 5, 9); // Invo
  
  const obj = {
    method() {
      return 'Some method';
    }
  };
  obj.method(); // Invo
  
  class SomeClass {
    constructor(prop) {
      this.prop = prop;
    } 
  }
  const instance = new SomeClass('Value'); // Invo

//Constructor invocation happens when a function or class is invoked using new keyword.
function MyCat(name) {
    this.name = name;
  }
  const fluffy = new MyCat('Fluffy'); // cInvo
  
  class MyDog {
    constructor(name) {
      this.name = name;
    }
  }
  const rex = new MyDog('Rex'); // cInvo

//An indirect invocation of happens when a function is called using func.call(thisArg, ...) or func.apply(thisArg, ...) methods.
function sum(number1, number2) {
    return number1 + number2;
  }
  
  sum.call({}, 1, 2);
  sum.apply({}, 3, 5);

//Method invocation happens when a function is invoked in a property accessor expression object.method()
const object = {
    greeting(who) {
      return `Hello, ${who}!`
    }
  };
  
  object.greeting('World');
  object['greeting']('World');

//Regular invocation happens when the sole variable containing the function is used for invocation func(...)
function sum(number1, number2) {
    return number1 + number2;
  }
  
  sum(1, 4);

//Strict mode is a special mode imposed upon running JavaScript code having some special restrictions. The strict mode is enabled by adding 'use strict' directive at the start of the script or the top of the function scope.
