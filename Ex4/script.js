/* Ex 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/

"use strict";

var a = 5,
  b = 10;
//var c = 2;
if (b > a) {
  let c = 2;
  c = a + b + c;
  // var c = 2 gonna be 2 on stack
  console.log(c);
  // BEFORE: Uncaught ReferenceError: c is not defined
  // AFTER: 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
//in global scope c is still not defined
