const maxium = (num) => {
  let ok = false;
  const digits = num.toString();
  let max = '';
  for (let i = 0; i < digits.length ; i++) {
    if (parseInt(digits[i], 10) === 6 && ok === false) {
      ok = true;
      max += '9'
    } else {
      max += digits[i]
    }
  }
  return parseInt(max, 10);
}

console.log(maxium(9669));
