const removeDuplicates = (nums) => {
	if (nums.length <= 2) return nums.length;
	let writeIndex = 2;
	for (let i = 2; i < nums.length; i++) {
		if (nums[i] !== nums[writeIndex - 2]) {
			nums[writeIndex] = nums[i];
			writeIndex++;
		}
	}
	return writeIndex;
};

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);
console.log(nums);
