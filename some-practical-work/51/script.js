const numbers = [2, 4, 6];

const sum = numbers.reduce(function (sum, number) {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

sum; // 12

const sum = numbers.reduce(function summarize(sum, number) {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

sum; // 12

const sum2 = numbers.reduce(function summarize(sum, number, index) {
  console.log(index); // logs 1, 2
  return sum + number;
});

sum2; // 12
