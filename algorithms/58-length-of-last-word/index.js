const lengthOfLastWorld = (str = '') => {
  const arr = str.trim().split(' ');
  console.log(arr);
  if (arr.length === 0) return 0;
  return arr[arr.length - 1].length
};

const log = console.log;

const test = (expectedValue, fn, ...args) => {
	const output = fn(...args);
	if (expectedValue === output) {
		return log("passed!", output);
	}
	return log("failed", output);
};


test(5, lengthOfLastWorld, "Hello World")
test(4, lengthOfLastWorld, "   fly me   to   the moon  ")
test(6, lengthOfLastWorld, "luffy is still joyboy")