const dec = (s) => {
  const map1 = 'abcdefghijklmnopqrstuvwxyz'
  let newStr = [];
  for (let i = 0 ; i < s.length; i++) {
    if (s[i] === '#') {
      const d = newStr[newStr.length - 2] + newStr[newStr.length - 1];
      newStr.pop() + newStr.pop();
      newStr.push(map1[parseInt(d, 10) - 1]);
    } else {
      newStr.push(s[i]);
    }
  }
  for (let i = 0 ; i < newStr.length; i++) {
    const d = parseInt(newStr[i], 10);
    if (d >= 0 && d <= 9) {
      newStr[i] = map1[d - 1];
    } 
  }
  return newStr.join('');
}

console.log(dec("10#11#12"));

