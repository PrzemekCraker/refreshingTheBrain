/* Ex 6 - Arrow Functions

Use arrow functions instead of functions
where possible.
*/

"use strict";

/*
function mult(a, b) {
  return a * b;
}

setTimeout(function() {
  console.log(mult(5, 10));
}, 1000);
// 50
*/

const a = (a, b) => a * b;

setTimeout(() => console.log(a(5, 10)), 1000);
// 50