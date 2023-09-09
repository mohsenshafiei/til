const filter = function (arr, fn) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn && typeof fn === "function") {
			const val = fn(arr[i], i);
			if (val) {
        res.push(arr[i]);
      }
		}
	}
	return res;
};

const fn = function plusOne(n) { return n + 1 }
arr = [-2,-1,0,1,2]

console.log(filter(arr, fn));
