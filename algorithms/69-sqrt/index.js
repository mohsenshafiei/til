const mySqrt = (x) => {
  let i = 0;
  while (i * i < x) {
    i++;
  }
  if (i * i === x) return i;
  return i - 1;
};

const mySqrtBetter = (x) => {
  let l = 1;
  let r = x;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l - 1;
};

const test = (expectedValue, func, ...args) => {
  const result = func(...args);
  if (expectedValue !== result) {
    console.log(
      "TEST Failed",
      "Expected Value:",
      expectedValue,
      "Result",
      result
    );
    return false;
  }
  console.log(
    "TEST Passed",
    "Expected Value:",
    expectedValue,
    "Result",
    result
  );
  return true;
};

test(2, mySqrt, 4);
test(2, mySqrt, 8);
