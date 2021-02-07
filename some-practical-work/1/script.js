const getIndexToIns = (arr, num) =>
  [...arr, num]
    .sort((a, b) => a - b)
    .reduce((acc, current, i) => (current === num && acc === -1 ? i : acc), -1);
