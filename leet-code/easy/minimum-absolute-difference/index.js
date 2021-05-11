const minabs = (ar) => {
  const arr = ar.sort((a, b) => a - b)
  let diff = 99999999999;
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i+ 1]) < diff) {
      res = [[arr[i], arr[i + 1]]];
      diff = Math.abs(arr[i] - arr[i + 1]);
      continue;
    }
    if (Math.abs(arr[i] - arr[i+1]) === diff) res.push([arr[i], arr[i+ 1]]);
  }
  return res;
}

console.log(minabs([4,2,1,3]))