const number = 10;

const bool = false;

const str = "Hello!";

const missingObject = null;

const nothing = undefined;

const plainObject = {
  prop: "Value",
};

const array = [1, 5, 6];

const functionObject = (n1, n2) => {
  return n1 + n2;
};

let a = 1;
let b = a;

b = b + 2;

console.log(a);
console.log(b);

let x = [1];
let y = x;

y.push(2);

console.log(x);
console.log(y);

const ar1 = [1];
const ar2 = [1];

console.log(ar1 === ar2); //f
console.log(ar1 === [1]); //f

const ar11 = ar1;
console.log(ar1 === ar11); //t
console.log(ar1 === ar1); //t
