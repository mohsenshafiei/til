// testUtil.js

const deepEqual = (a, b) => {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  ) {
    return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(sortedA[i], sortedB[i])) return false;
    }
    return true;
  }

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
};

const log = (...args) => {
  console.log(...args);
};

const test = (expectedValue, fn, ...args) => {
  const res = fn(...args);
  if (deepEqual(res, expectedValue)) {
    log("passed!", expectedValue, res);
    return true;
  } else {
    log("failed", expectedValue, res);
    return false;
  }
};

module.exports = { test };
