const busyStudent = (s, e, q) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (q >= s[i] && q <= e[i]) {
      count++;
    }
  }
  return count;
}

console.log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5))