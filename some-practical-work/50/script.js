typeof Infinity; // 'number'
typeof -Infinity; // 'number'

window.Infinity; // Infinity

Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity

Infinity > 100; // true
Infinity > Number.MAX_SAFE_INTEGER; // true
Infinity > Number.MAX_VALUE; // true

Infinity + 1; // Infinity
Infinity + Infinity; // Infinity

Infinity * 2; // Infinity
Infinity * Infinity; // Infinity

Infinity / 2; // Infinity

10 / Infinity; // 0

2 / 0; // Infinity

Infinity / Infinity; // NaN
Infinity % 2; // NaN

-Infinity < 100; // true
-Infinity < -Number.MAX_SAFE_INTEGER; // true
-Infinity < -Number.MAX_VALUE; // true

-Infinity < Infinity; // => true

Infinity * -1; // -Infinity
Infinity / -2; // -Infinity
-2 / 0; // -Infinity

Infinity === Infinity; // true
-Infinity === -Infinity; // true

Infinity === -Infinity; // false

Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite(999); // true

function findMin(array) {
  let min = Infinity;
  for (const item of array) {
    min = Math.min(min, item);
  }
  return min;
}

findMin([5, 2, 1, 4]); // 1

parseFloat("10.5"); // 10.5

parseFloat("ZZZ"); // NaN

parseFloat("Infinity"); // Infinity

parseInt("10", 10); // 10

parseInt("Infinity", 10); // NaN

const worker = {
  salary: Infinity,
};

JSON.stringify(worker); // '{ "salary": null }'

2 * Number.MAX_VALUE; // Infinity
Math.pow(10, 1000); // Infinity

const numbers = [1, 2];
const empty = [];

Math.max(...numbers); // 2
Math.max(...empty); // -Infinity

Math.min(...numbers); // 1
Math.min(...empty); // Infinity
