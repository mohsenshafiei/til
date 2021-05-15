const integerToRoman = (num) => {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let arr = [];
  let temp = num;
  let arry = Object.entries(map).reverse();
  while (temp > 0) {
    for (let m in arry) {
      if (temp >= arry[m][1]) {
        const x = Math.floor(temp / arry[m][1]);
        temp = temp % arry[m][1];
        arr.push({
          key: arry[m][0],
          x: x
        });
      }
    }
  }
  const res = arr.map(el => el.key.repeat(el.x)).join('');
  return res;
}

integerToRoman(27);
integerToRoman(58);
integerToRoman(1994);