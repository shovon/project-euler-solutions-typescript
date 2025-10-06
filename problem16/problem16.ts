console.log(
  (2n ** 1000n)
    .toString(10)
    .split("")
    .map(Number)
    .reduce((prev, next) => prev + next, 0)
);
