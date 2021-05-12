const sort = (arr) => {
  let res = [];
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] % 2 === 0) res.unshift(arr[i]);
    else res.push(arr[i]);
  }
  return res;
}


sort([3,1,2,4, 5])