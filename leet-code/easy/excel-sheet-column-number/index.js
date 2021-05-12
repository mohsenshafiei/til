const cal = (str) => {
  let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let map = {};
  for (let i = 0 ; i < alph.length; i++) {
    map[alph[i]] = i + 1;
  }
  let sum = 0;
  const reversed = str.split('').reverse().join('');
  for (let i = 0; i < reversed.length; i++) {
    sum += map[reversed[i]] * Math.pow(26, i);
  }
  return sum;
}

console.log(cal('AB'));
console.log(cal('ZY'));
console.log(cal('FXSHRXW'));