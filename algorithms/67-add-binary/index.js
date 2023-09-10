const addBinary = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  const arrA = new Array(maxLen).fill("0");
  const arrB = new Array(maxLen).fill("0");
  const res = new Array(maxLen).fill("0");
  let k = maxLen - 1;
  for (let i = a.length - 1; i >= 0; i--) {
    arrA[k] = a[i];
    k--;
  }

  k = maxLen - 1;
  for (let i = b.length - 1; i >= 0; i--) {
    arrB[k] = b[i];
    k--;
  }

  for (let i = maxLen - 1; i >= 0; i--) {
    const total =
      parseInt(arrA[i], 10) + parseInt(arrB[i], 10) + parseInt(res[i], 10);
    if (total >= 2) {
      const value = (total % 2).toString();
      res[i] = value;
      if (i === 0) {
        res.unshift("0");
      }
      if (i > 0) res[i - 1] = "1";
      else res[0] = "1";
      continue;
    } else {
      res[i] = total.toString();
    }
  }
  return res.join("");
};

var addBinaryBetter = function (a, b) {
  // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  // sum is converted back to string using toString(2), here 2 is radix argument, so toString(2) converts to binary
  return sum.toString(2);
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

test("100", addBinary, "11", "1");
test("10101", addBinary, "1010", "1011");
