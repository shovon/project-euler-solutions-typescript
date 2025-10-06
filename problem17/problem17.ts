const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const firstNineteen = [
  ...words,
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const larger = ["hundred", "thousand"];

const toWord = (n: number): string => {
  if (n < 20) {
    const result = firstNineteen[n - 1];
    if (result === undefined) throw new Error("Fatal error");
    return result;
  }

  if (n < 100) {
    let str = tens[Math.floor(n / 10) - 2];
    if (str === undefined) throw new Error("Fatal error");
    if (n % 10 > 0) {
      const unit = words[(n % 10) - 1];
      if (unit === undefined) throw new Error("Fatal error");
      str += unit;
    }
    return str;
  }

  if (n < 1000) {
    let str = `${words[Math.floor(n / 100) - 1]}hundred`;
    if (str === undefined) throw new Error("Fatal error");
    if (n % 100 > 0) {
      str += `and${toWord(n % 100)}`;
    }
    return str;
  }

  return "onethousand";
};

let sum = 0;
for (let i = 1; i <= 1000; i++) {
  const word = toWord(i);
  console.log(word);
  sum += word.length;
}

console.log(sum);
