const uniqueArray = (n) => {
  let res = n % 2 === 0 ? [] : [0];
  let len = n % 2 === 0 ? (n / 2) + 1 : n / 2;
  let i = 1;

  while (i < len) {
    res.push(i);
    res.push(i * -1);
    i++;
  }
  return res;
}

console.log(uniqueArray(5));
console.log(uniqueArray(3));
console.log(uniqueArray(1));
console.log(uniqueArray(4));
console.log(uniqueArray(10));