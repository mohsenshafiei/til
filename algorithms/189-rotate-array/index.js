const rotateArray = (arr, k) => {
	let i = 0;
	k = k % arr.length;
	let portion = arr.splice(-k);
	arr.unshift(...portion);
};

const arr = [1, 2, 3, 4, 5];
const k = 3;
rotateArray(arr, k);
