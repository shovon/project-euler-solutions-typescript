const sieveOfEratosthenes = (n: number): number[] => {
  const arr = Array.from({ length: n }).map(() => true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i ** 2; j < n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr
    .map((isPrime, i): [boolean, number] => [isPrime, i])
    .filter(([isPrime]) => isPrime)
    .map(([, i]) => i);
};

const nthPrimeUpperBound = (n: number) =>
  n * (Math.log(n) + Math.log(Math.log(n)));

const n = 10001;

console.log(sieveOfEratosthenes(nthPrimeUpperBound(n))[n - 1]);
