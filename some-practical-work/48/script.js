const infinite = Infinity;
const faulty = NaN;

typeof infinite; // 'number'
typeof faulty; // 'number'

typeof NaN; // 'number'
typeof window.NaN; // 'number'
typeof Number.NaN; // 'number'

NaN === NaN; // false

const someNumber = NaN;

if (someNumber !== someNumber) {
  console.log("Is NaN");
} else {
  console.log("Is Not NaN");
} //"Is NaN"

isNaN(NaN); // true
isNaN(1); // false

Number.isNaN(NaN); // true
Number.isNaN(1); // false

isNaN("Joker12"); // true
Number.isNaN("Joker12"); // false

const numberString = "1.5";
const number = parseFloat(numberString);

number;

parseFloat("Joker12.5"); // NaN
parseInt("Joker12", 10); // NaN
Number("Joker12"); // NaN

let inputToParse = "Invalid10";
let number;

number = parseInt(inputToParse, 10);
if (isNaN(number)) {
  number = 0;
}

number; // 0

function getFontSize(style) {
  return style.fontSize;
}

const fontSize = getFontSize({ size: 16 }) * 2;
const doubledFontSize = fontSize * 2;

doubledFontSize; // NaN

let invalidNumber = 1 * undefined;
let result = 1;
result += invalidNumber; // append
result *= 2; // duplicate
result++; // increment

result; // NaN
