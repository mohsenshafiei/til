const log = console.log;

// Assumptions

// Boundaries

// Edge Cases

// Code
// const wordBreak = (s, wordDict) => {
//   let res = false;

//   const breakWord = (i, j) => {
//     if (res === true) return true;
//     if (i === s.length) {
//       res = true;
//       return;
//     }
//     const substr = s.slice(i, j);
//     if (wordDict.indexOf(substr) > -1) {
//       breakWord(j, j + 1);
//     } else {
//       if (j < s.length) {
//         breakWord(i, j + 1);
//       } else {
//         breakWord(i + 1, i + 2);
//       }
//     }
//   };

//   breakWord(0, 1);
//   return res;
// };

const wordBreak = (s, wordDict) => {
  const memo = {};

  const breakWord = (i) => {
    if (i === s.length) return true;
    if (memo[i] !== undefined) return memo[i];

    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.slice(i, j);
      if (wordDict.indexOf(substr) > -1 && breakWord(j)) {
        memo[i] = true;
        return true;
      }
    }
    memo[i] = false;
    return false;
  };

  return breakWord(0);
};

// Tests
const test = (expectedValue, fn, ...args) => {
  const result = fn(...args);
  if (result === expectedValue) {
    log("Passed!", expectedValue, result);
    return true;
  }
  log("Failed.", expectedValue, result);
  return false;
};

test(true, wordBreak, "leetcode", ["leet", "code"]);
test(true, wordBreak, "", [""]);
test(true, wordBreak, "applepenapple", ["apple", "pen"]);
test(false, wordBreak, "catsandog", ["cats", "dog", "sand", "and", "cat"]);
