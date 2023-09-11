const { test } = require("../utils");

const isEmpty = (s) => {
  return s === "" ? true : false;
};

// My solution which gets runtime error
const isInterLeave = (s1, s2, s3) => {
  if (isEmpty(s1) && isEmpty(s2) && isEmpty(s3)) return true;
  if (s1.length + s2.length !== s3.length) return false;

  const fn = (i, j, k) => {
    if (i === s1.length && j === s2.length && k === s3.length) return true;
    if (k === s3.length) return false;
    let result1 = false,
      result2 = false;
    if (i < s1.length && s1[i] === s3[k]) {
      result1 = fn(i + 1, j, k + 1);
    }
    if (j < s2.length && s2[j] === s3[k]) {
      result2 = fn(i, j + 1, k + 1);
    }
    return result1 || result2;
  };

  return fn(0, 0, 0);
};

// DP Solution which calculate it in O(m + n) time where
// m is the length of s1
// n is the length of s2
// which is much faster than exponential solution and recursive approach

/* 
s1: a b c
s2: d e f
s3: a d b c e f

      | - | d | e | f |
      -----------------
  -   | T | F | F | F |
  ---------------------
  a   | T | T | F | F |
  ---------------------
  b   | F | T | F | F |
  ---------------------
  c   | F | F | T | T |


Here's a breakdown of the matrix:

dp[0][0] is true because if both s1 and s2 are empty, then s3 should also be empty.
For the first row, we only compare s2 with s3 (since s1 is considered empty in this row).
For the first column, we only compare s1 with s3 (since s2 is considered empty in this column).
For the rest of the cells, we check if the current character in s3 matches the current character in s1 or s2 and whether the interleaving was possible until the previous character.
In the matrix:

T denotes true.
F denotes false.
For the example given:

dp[1][0] is true because the first character of s3 (a) matches the first character of s1 (a).
dp[1][1] is true because the first two characters of s3 (ad) can be formed by interleaving the first character of s1 (a) and the first character of s2 (d).
The last cell dp[3][3] is true which indicates that s3 can indeed be formed by interleaving s1 and s2.
The final answer is the value in the bottom-right corner of the matrix. In this case, dp[3][3] is true, so s3 can be formed by interleaving s1 and s2.
*/

const isInterLeaveDP = (s1, s2, s3) => {
  const m = s1.length;
  const n = s2.length;
  const l = s3.length;

  if (m + n !== l) return false;

  // Create a 2D table to store solutions to subproblems
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  // Initialize the base cases
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      // If both s1 and s2 are empty, s3 should also be empty
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      }
      // If s1 is empty, check for s2 and s3
      else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
      }
      // If s2 is empty, check for s1 and s3
      else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
      }
      // Check for both s1 and s2
      else {
        dp[i][j] =
          (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[m][n];
};

test(true, isInterLeave, "aabcc", "dbbca", "aadbbcbcac");
test(false, isInterLeave, "aabcc", "dbbca", "aadbbbaccc");
test(true, isInterLeave, "", "", "");
test(
  true,
  isInterLeave,
  "abababababababababababababababababababababababababababababababababababababababababababababababababbb",
  "abababababababababababababababababababababababababababababababababababababababababababababababababab",
  "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb"
);
