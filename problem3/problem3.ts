function findFactors(n: number): number[] {
  if (n <= 1) return [n];

  const factors = new Set<number>([]);

  while (n % 2 === 0) {
    factors.add(2);
    n /= 2;
  }

  for (let i = 3; i < Math.floor(Math.sqrt(n)); i+=2) {
    while (n % i === 0) {
      factors.add(i);
      n /= i;
    }
  }

  if (n > 1) {
    factors.add(n);
  }

  return [...factors];
}

console.log(findFactors(600851475143));