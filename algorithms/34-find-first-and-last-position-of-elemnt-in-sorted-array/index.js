const { test } = require("../utils");

const binarySearch = (nums, target, l, r) => {
  const mid = Math.floor((l + r) / 2);
  if (nums[mid] === target) return mid;
  if (l >= r) return -1;
  if (nums[mid] > target) {
    return binarySearch(nums, target, l, mid - 1);
  } else {
    return binarySearch(nums, target, mid + 1, r);
  }
};

const searchRange = function (nums, target) {
  let res = [-1, -1];

  const binarySearch = (nums, target, l, r) => {
    if (l > r) return;

    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      res[0] = res[0] === -1 ? mid : Math.min(res[0], mid);
      res[1] = res[1] === -1 ? mid : Math.max(res[1], mid);

      // Dive into left and right subarrays
      binarySearch(nums, target, l, mid - 1);
      binarySearch(nums, target, mid + 1, r);
    } else if (nums[mid] < target) {
      binarySearch(nums, target, mid + 1, r);
    } else {
      binarySearch(nums, target, l, mid - 1);
    }
  };

  binarySearch(nums, target, 0, nums.length - 1);
  return res;
};

// BetterSolution
const searchRange1 = function (nums, target) {
  const result = [-1, -1];

  // Search for the left boundary of the target
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  if (l >= nums.length || nums[l] !== target) return result;
  result[0] = l;

  // Search for the right boundary of the target
  r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  result[1] = r;

  return result;
};

test([3, 4], searchRange, (nums = [5, 7, 7, 8, 8, 10]), (target = 8));
test([-1, -1], searchRange, (nums = [5, 7, 7, 8, 8, 10]), (target = 6));
