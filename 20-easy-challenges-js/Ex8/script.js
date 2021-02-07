/* Ex 8 - Check presence of the function parameters

Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/

"use strict";

function square(a = error()) {
  console.log(a * a);
}

function error() {
  throw new Error("Put an argument!");
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!
