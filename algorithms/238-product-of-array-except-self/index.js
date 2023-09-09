const countZeros = (arr) => {
	let count = 0;
	for (let num of arr) {
		if (num === 0) count++;
	}
	return count;
};

function convertNegativeZeroToZero(value) {
	if (value === 0) {
		return 0;
	}
	return value;
}

const productExceptSelf = (arr) => {
	let m = 1;
	let n = 1;
	const count = countZeros(arr);
	if (count > 1) return new Array(arr.length).fill(0);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			m *= arr[i];
		} else {
			m *= arr[i];
			n *= arr[i];
		}
	}
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			res.push(n);
		} else {
			res.push(convertNegativeZeroToZero(m / arr[i]));
		}
	}
	return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([-1, 1, 0, 0, -3, 3]));
console.log(productExceptSelf([4,3,2,1,2]));
