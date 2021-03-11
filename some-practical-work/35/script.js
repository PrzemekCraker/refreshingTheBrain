function run() {
  const message = "Run, Forrest, Run!";

  if (true) {
    const friend = "Bubba";
    console.log(message);
  }

  console.log(friend); //ReferenceError
}
run();

function outerFunc() {
  let outerVar = "I am from outside!";

  function innerFunc() {
    console.log(outerVar);
  }
  return innerFunc;
}

const inner = outerFunc();
inner();

function foo() {
  // "foo" function scope
  let count = 0;
  console.log(count); // 0
}

function bar() {
  // "bar" function scope
  let count = 1;
  console.log(count); // 1
}

foo();
bar();
