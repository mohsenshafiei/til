const sortArrayByIncreasingFrequency = (arr) => {
  let fre = {};
  for (let i = 0 ; i < arr.length; i++) {
    if (!fre[arr[i]]) fre[arr[i]] = 1;
    else fre[arr[i]]++;
  }
  const el = Object.entries(fre).sort((a, b) => ((a[1] !== b[1] && a[1] - b[1]) || (a[1] === b[1] && parseInt(b[0], 10) - parseInt(a[0], 10))));
  let res = [];
  for (let i = 0; i< el.length; i++) {
    let j = 0;
    while (j < el[i][1]) {
      res.push(parseInt(el[i][0], 10))
      j++;
    }
  }
  return res;
}

// better solution

const sortArray = (nums) => {
  let map = new Map();
  for (let i of nums) {
   map.set(i, (map.get(i) || 0) + 1)
  }
  return nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a
    } else {
      return map.get(a) - map.get(b)
    }
  })
};


console.log(sortArrayByIncreasingFrequency([1,1,2,2,2,3]))
console.log(sortArrayByIncreasingFrequency([2,3,1,3,2]))
console.log(sortArray([2,3,1,3,2]))
console.log(sortArray([2,3,1,3,2]))