const log = console.log;

const searchInsert = (arr, target) => {
	let index = binarySearch(arr, target, 0, arr.length);
	return index;
};

const binarySearch = (arr, target, min = 0, max = arr.length - 1) => {
	const mid = Math.floor((min + max) / 2);
	if (min >= max) {
		if (arr[min] < target) {
			return mid + 1;
		} else {
			if (mid < 0) return 0;
			return Math.ceil((min + max) / 2);
		}
	}
	if (arr[mid] === target) return mid;
	if (arr[mid] > target) return binarySearch(arr, target, min, mid - 1);
	return binarySearch(arr, target, mid + 1, max);
};

const test = (expectedValue, fn, ...args) => {
	const res = fn(...args);
	if (res === expectedValue) log("test passed!");
	else log("test failed");
	return res;
};

log(test(2, searchInsert, [1, 3, 5, 6], 5));
log(test(1, searchInsert, [1, 3, 5, 6], 2));
log(test(4, searchInsert, [1, 3, 5, 6], 7));
log(test(1, searchInsert, [1, 3], 2));
log(test(0, searchInsert, [1, 3, 5, 6], 0));
