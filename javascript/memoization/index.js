class Memo {
	constructor(initValue) {
		this.map = initValue || {};
	}
	memo(fn) {
		return (value) => {
			if (this.map[value]) {
				console.log("cached data");
				return this.map[value];
			} else {
				console.log("fresh calculation");
				const res = fn(value);
				this.map[value] = res;
				return res;
			}
		};
	}
}

const M = new Memo();

const myFunction = (val) => {
	return val + 2;
};

const memoizedFn = M.memo(myFunction);

memoizedFn(2); // fresh calculation
memoizedFn(3); // fresh calculation
memoizedFn(2); // cached data
