const number = 42;
const message = `The number is ${number}`;

message;

const b1 = 2;
const b2 = 3;

const message1 = `The sum is ${b1 + b2}`;
message1; // => 'The sum is 5';

function sum(num1, num2) {
  return num1 + num2;
}
const message2 = `The sum is ${sum(n1, n2)}`;
message2;

const n = 3.5;
const message3 = `The number is ${n}`;

message3;

const message4 = `Some weird characters: \${abc} \${abc \${`;

message4;

const a1 = 2;
const a2 = 3;
const message5 = `The sum of ${a1} and ${a2} is ${a1 + a2}`;

message5;

const n1 = 2;
const n2 = 3;

const sum = n1 + n2;
const diff = n1 - n2;
const pow = Math.pow(n1, n2);

const message6 = `Sum: ${sum}, difference: ${diff}, pow: ${pow}`;

message6;

function getLoadingMessage(isLoading) {
  return `Data is ${isLoading ? "loading..." : "done!"}`;
}
