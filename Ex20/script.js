/* Ex 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
function sumPlusMinus() {
  let sum = {
    plus: 0,
    minus: 0,
  };
  for (let x in nums) {
    if (nums[x] < 0) {
      sum.minus += nums[x];
    } else {
      sum.plus += nums[x];
    }
  }
  return sum;
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
