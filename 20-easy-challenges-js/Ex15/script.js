/* Ex 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here

/*
for (let l = 0; l < str.length; l++) {
  if (vowels.includes(str[l])) vowelsCount ++
}
*/

// ES2016 (ES7) syntax
for (let l of str) {
  if (vowels.includes(l)) vowelsCount++;
}

console.log(vowelsCount);
// 8
