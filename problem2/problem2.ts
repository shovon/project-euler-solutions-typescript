let a = 1, b = 2;
let sum = 0;
for (let i = 0; b < 4_000_000; i++) {
  if (b % 2 === 0) sum += b;
  const fib = a + b;
  a = b;
  b = fib;
}
console.log(sum);