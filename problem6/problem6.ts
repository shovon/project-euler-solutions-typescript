let sumOfSquares = 0;
for (let i = 1; i <= 100; i++) {
  sumOfSquares += i ** 2;
}

console.log(((100 * (100 + 1)) / 2) ** 2 - sumOfSquares);
