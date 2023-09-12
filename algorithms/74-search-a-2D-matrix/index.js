const test = (expectedValue, fn, ...args) => {
  const res = fn(...args);
  if (res === expectedValue) {
    console.log("Passed");
    return true;
  }
  console.log("Failed");
  return false;
};

const bs = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) r = mid - 1;
    else l = mid + 1;
  }

  return -1;
};

const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  const b = (l, r) => {
    if (l > r) return -1;

    const mid = Math.floor((l + r) / 2);

    if (matrix[mid][0] === target) return mid;

    if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) return mid;

    if (matrix[mid][0] > target) return b(l, mid - 1);

    return b(mid + 1, r);
  };

  const row = b(0, m - 1);
  if (row === -1) return false;

  const index = bs(matrix[row], target);
  return index !== -1;
};

test(
  false,
  searchMatrix,
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  13
);

test(
  true,
  searchMatrix,
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
);

test(
  true,
  searchMatrix,
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
);
test(true, searchMatrix, [[1]], 1);
test(false, searchMatrix, [], 3);
