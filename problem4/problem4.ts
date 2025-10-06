const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const lcm = (a: number, b: number, ...rest: number[]): number => {
  const [first, ...next] = rest;
  if (first === undefined) return (a * b) / gcd(a, b);
  return lcm(lcm(a, b), first, ...next)
};

const [a, b, ...rest] = Array.from({ length: 20 }).map((_, i) => i + 1);

if (a === undefined || b === undefined) throw new Error('Fatal error: a and b are undefined');

console.log(lcm(a, b, ...rest));
