const removeElement = (nums, val) => {
	let i = 0;
	let count = 0;
	const len = nums.length;
	while (i <= len) {
		if (nums[i] === val) {
			count++;
			nums.splice(i, 1);
			i--;
		}
		i++;
	}
	return nums.length;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
const res = removeElement(nums, val);
console.log(nums, res);
