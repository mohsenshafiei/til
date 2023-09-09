const reduce = (arr, fn, init) => {
	let res = init;
	for (let i = 0; i < arr.length; i++) {
		res = fn(res, arr[i]);
	}
	return res;
};
