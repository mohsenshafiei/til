const jumpGame = (arr) => {
	let lastReachableIndex = arr.length - 1;

	for (let i = arr.length - 2; i >= 0; i--) {
		if (i + arr[i] >= lastReachableIndex) {
			lastReachableIndex = i;
		}
	}

	return lastReachableIndex === 0;
};

const jumpGame2 = (nums) => {
	if (nums.length <= 1) return 0;

	let jumps = 0;
	let maxReach = nums[0];
	let end = nums[0];

	for (let i = 1; i < nums.length - 1; i++) {
			maxReach = Math.max(maxReach, i + nums[i]);

			if (i === end) {
					jumps++;
					end = maxReach;
			}
	}

	return jumps + 1;  // +1 for the last jump to reach the end
};

nums = [2, 3, 1, 1, 4];

console.log(jumpGame(nums));
console.log(jumpGame2(nums));
