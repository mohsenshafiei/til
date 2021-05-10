const maximumProduct = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return (sorted[sorted.length - 1] - 1) * (sorted[sorted.length - 2] - 1);
}

console.log(maximumProduct([3,4,5,2]))
console.log(maximumProduct([10,2,5,2]))