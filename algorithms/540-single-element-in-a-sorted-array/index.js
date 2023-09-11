const { test } = require("../utils");

const singleNonDuplicate = (nums) => {
  const bs = (l, r) => {
    if (l === r) return nums[l];
    const mid = Math.floor((l + r) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        return bs(mid + 2, r);
      } else {
        return bs(l, mid);
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        return bs(mid + 1, r);
      } else {
        return bs(l, mid - 1);
      }
    }
  };

  return bs(0, nums.length - 1);
};

test(2, singleNonDuplicate, [1, 1, 2, 3, 3, 4, 4, 8, 8]);
test(10, singleNonDuplicate, [3, 3, 7, 7, 10, 11, 11]);
