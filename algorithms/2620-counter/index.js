const createCounter = (n) => {
	let res = n;
	return () => {
    const val = res;
    res = res + 1;
		return val;
	};
};

const counterFn = createCounter(10);
console.log(counterFn()); // 10
console.log(counterFn()); // 11
console.log(counterFn()); // 12
