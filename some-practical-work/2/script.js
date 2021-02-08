function destroyer(arr) {
  return arr.filter(
    (x) =>
      !Object.values(arguments)
        .slice(1)
        .find((y) => y === x)
  );
}
