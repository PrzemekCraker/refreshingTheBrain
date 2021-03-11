for (const color of ["green", "red", "blue"]) {
  const message = "Hi";
  console.log(color);
  console.log(message);
}
console.log(color); //ReferenceError
console.log(message);

if (true) {
  // var
  var count = 0;
  console.log(count);
}
console.log(count); //0

function run() {
  //function
  const two = 2;
  let count = 0;
  function run2() {}

  console.log(two); // 2
  console.log(count); // 0
  console.log(run2); // function
}

run();
console.log(two); //ReferenceError
console.log(count);
console.log(run2);
