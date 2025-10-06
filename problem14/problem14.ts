const cache = new Map<number, number>([[1, 1]]);
const countCollatz = (n: number): number => {
  const cached = cache.get(n);
  if (cached !== undefined) return cached;

  const result = countCollatz(n % 2 === 0 ? n / 2 : 3 * n + 1) + 1;
  cache.set(n, result);
  return result;
};

let largest = 0;
let num = 1;
let i = 1;
for (; i < 1_000_000; i++) {
  const count = countCollatz(i);
  if (count > largest) {
    largest = count;
    num = i;
  }
  console.log(largest);
}
console.log(num);
