const world = {
  who: "World",

  greet() {
    console.log(this === world);
    return `Hello, ${this.who}!`;
  },
};

world.greet(); // Method invocation - logs true

const greetFunc = world.greet;
greetFunc(); // Regular function invocation -logs false
