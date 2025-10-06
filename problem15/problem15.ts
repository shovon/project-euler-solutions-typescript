const factorial = (n: bigint): bigint => (n <= 1n ? n : n * factorial(n - 1n));

console.log(factorial(20n + 20n) / (factorial(20n) * factorial(20n)));
