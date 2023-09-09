const add = (a, b, c) => {
	return a + b + c;
};

const addUnary = (a) => (b) => (c) => a + b + c;

console.log(add(1, 2, 3)); // 6
console.log(addUnary(1)(2)(3)); // 6
