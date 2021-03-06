1 === 1;
"abc" === "abc";
true === true;
null === null;
undefined === undefined;

const myObject = { prop: "Value" };
myObject === myObject; // t

Object.is(NaN, NaN); // t
Object.is(NaN, 1); // f

Object.is(-0, +0); // f
