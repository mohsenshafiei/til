const isArmstrong = (num) => {
  let digits = num.toString();
  let sum = 0;
  for (let i = 0; i< digits.length; i++) {
    sum += Math.pow(parseInt(digits[i], 10), digits.length);
    if (sum > num) return false;
  }
  if (sum === num) return true;
  return false;
}