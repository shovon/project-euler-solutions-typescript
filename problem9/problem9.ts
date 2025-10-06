let m = 2, n = 1;

const findThousand = () => {
  while (true) {
    while (m > n) {
      const a = m**2 - n**2, b = 2 * m * n, c = m**2 + n**2;
      if (a + b + c === 1000) {
        return a*b*c;
      }
      n++;
    }
    m++;
    n = 1;
  }
}

console.log(findThousand());