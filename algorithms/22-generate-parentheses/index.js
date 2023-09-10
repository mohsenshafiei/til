const { test } = require("../utils");

const getEqual = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result = "(" + result;
    result = result + ")";
  }
  return result;
};

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

const incompleteSolution = (n) => {
  if (n === 0) return [];
  if (n === 1) return ["()"];
  const prev = generateParenthesis(n - 1);
  const r = prev.map((item) => item + "()");
  const l = prev.map((item) => "()" + item);
  const a = prev.map((item) => "(" + item + ")");
  const m = prev.map(
    (item) =>
      item.slice(0, item.length / 2) + "()" + item.slice(item.length / 2)
  );
  return removeDuplicates([getEqual(n), ...r, ...l, ...a, ...m]);
};

// COMPLETE SOLUTION

const generateEqual = (n) => {
  return "(".repeat(n) + ")".repeat(n);
};

const generateParenthesis = (n) => {
  if (n === 0) return [];
  if (n === 1) return ["()"];

  const prev = generateParenthesis(n - 1);
  const resultSet = new Set();

  for (const item of prev) {
    resultSet.add(item + "()");
    resultSet.add("()" + item);
    resultSet.add("(" + item + ")");
  }

  resultSet.add(generateEqual(n));

  return [...resultSet];
};

test(
  ["((()))", "(()())", "(())()", "()(())", "()()()"],
  generateParenthesis,
  3
);
test(["()"], generateParenthesis, 1);
