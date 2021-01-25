"use strict";

function sum(...numbers) {
  let sums;
  sums = numbers.reduce((prev, curr) => prev + curr);
  console.log(sums);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
