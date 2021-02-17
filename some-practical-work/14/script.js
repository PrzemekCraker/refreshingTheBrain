const fibonacci = (num) => {
  if (num < 2) {
    return num; // if num is either 0 or 1 return num
  }
  // recursion
  return fibonacci(num - 1) + fibonacci(num - 2);
};
