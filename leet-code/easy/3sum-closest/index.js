// another solution
const threeSumClosestSecond = (nums, target) => {
  let diff = 99999999, sz = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sz && diff != 0; ++i) {
    let lo = i + 1, hi = sz - 1;
    while (lo < hi) {
      const sum = sorted[i] + sorted[lo] + sorted[hi];
      if (Math.abs(target - sum) < Math.abs(diff))
        diff = target - sum;
      if (sum < target)
        ++lo;
      else
        --hi;
    }
  }
  return target - diff;
}


console.log(threeSumClosestSecond([-1,2,1,-4], 1));
console.log(threeSumClosestSecond([0, 0, 0], 1));