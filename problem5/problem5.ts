const palindromicProduct = () => {
  let largest = 0;
  for (let i = 999; i >= 0; i--) {
    for (let j = 999; j >= 0; j--) {
      const product = i * j;
      if (product.toString() === product.toString().split('').reverse().join('')) {
        if (product > largest) largest = product;
      }
    }
  }
  return largest;
}

console.log(palindromicProduct());