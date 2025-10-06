const getDivisors = (n: number): number[] => {
  const divisors = new Set<number>();

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }

  return [...divisors];
};

const getTriangleNumber = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

let i = 2;
let maxDivisors = 2;
while (true) {
  const triangleNumber = getTriangleNumber(i);
  const divisors = getDivisors(triangleNumber);
  if (divisors.length > maxDivisors) {
    maxDivisors = divisors.length;
  }
  if (maxDivisors > 500) {
    console.log(triangleNumber);
    break;
  }
  i++;
}
