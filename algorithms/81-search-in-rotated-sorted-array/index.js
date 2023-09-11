const { test } = require("../utils");

const binarySearch = (nums, target) => {
  const bs = (l, r) => {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return true;
    if (l > r) return false;
    if (nums[mid] < target) {
      return bs(mid + 1, r);
    }
    if (nums[mid] > target) {
      return bs(l, mid - 1);
    }
  };
  return bs(0, nums.length - 1);
};

var search = (nums, target) => {
  const bs = (l, r) => {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid + 1] < nums[mid]) return mid;
    if (l > r) return -1;
    return Math.max(bs(mid + 1, r), bs(l, mid - 1));
  };
  const index = bs(0, nums.length - 1);
  if (target === nums[index]) return true;
  if (target <= nums[index] && target >= nums[0]) {
    const temp = nums.slice(0, index);
    return binarySearch(temp, target);
  }
  if (target >= nums[index + 1] && target <= nums[nums.length - 1]) {
    const temp = nums.slice(index + 1, nums.length);
    return binarySearch(temp, target);
  }
  return false;
};

test(true, search, [2, 5, 6, 0, 0, 1, 2], 0);
test(false, search, [2, 5, 6, 0, 0, 1, 2], 3);
test(true, search, [4, 5, 6, 6, 7, 0, 1, 2, 4, 4], 0);
test(true, search, [2, 2, 2, 3, 2, 2, 2], 3);
