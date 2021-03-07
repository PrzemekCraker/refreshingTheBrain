function greet(who) {
  return `Hello, ${who}!`;
}

const greet = function (who) {
  return `Hello, ${who}`;
};

const greet = (who) => {
  return `Hello, ${who}!`;
};

function MyFunction() {
  console.log(this);
}

new MyFunction();

const myObject = {
  myMethod(items) {
    console.log(this);
    const callback = () => {
      console.log(this);
    };
    items.forEach(callback);
  },
};

myObject.myMethod([1, 2, 3]);

class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName = () => {
    console.log(this.heroName);
  };
}

const batman = new Hero("Batman");

setTimeout(batman.logName, 1000);
