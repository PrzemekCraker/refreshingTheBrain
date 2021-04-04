const object = {
  message: "Hello, World!",

  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};

console.log(object.getMessage());
//----------------
function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}
const cat = new Pet("Fluffy");
console.log(cat.getName());

const { getName } = cat;
console.log(getName());
//----------------
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);
//----------------
const object = {
  message: "Hello, World!",
};

function logMessage() {
  console.log(this.message); // logs 'Hello, World!'
}
logMessage.call(object);
//or logMessage.apply(object); or const boundLogMessage = logMessage.bind(object); and invoke
//----------------
const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }, //outer scope
};

console.log(object.greet());
console.log(object.farewell());
//----------------
var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);
//----------------
var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object.method(callback, 1, 2);
