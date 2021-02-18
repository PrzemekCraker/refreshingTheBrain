const object = {
  items: [1, 2],

  method() {
    this === object; // true
    this.items.forEach(function () {
      this === object; // false
      this === window; // true
    });
  },
};

object.method();

function regular() {
  const arrow = (...args) => {
    args; // => ['C']
  };

  arrow("C");
}

regular("A", "B");
