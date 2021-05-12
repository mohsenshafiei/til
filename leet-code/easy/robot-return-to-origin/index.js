const willReturn = (str) => {
  let a = 0;
  let b = 0;
  for (let i = 0; i< str.length; i++) {
    if (str[i]=== 'U') a = a - 1;
    if (str[i]=== 'D') a = a + 1;
    if (str[i]=== 'L') b = b - 1;
    if (str[i]=== 'R') b = b + 1;
  }
  if (a === 0 && b === 0) return true;
  return false;
}


console.log(willReturn("LDRRLRUULR"));