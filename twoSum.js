var twoSum = function (nums, target) {
	let len = nums.length;
	let arr = [];
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if (nums[i] + nums[j] === target) {
				arr.push(i);
				arr.push(j);
			}
		}
	}
	return arr;
};

console.log(twoSum([3, 7, 3], 6));
