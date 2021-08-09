/*
const isPalindrome = (x) => {
	// convert to string
	let sx = x.toString();

	let len = sx.length;
	let output = [];

	// creates an array of the numbers
	for (let i = 0; i < len; i++) {
		output.push(sx[i]);
	}

	// Reversed the array
	output.reverse();

	// Removes the '-' from the end of the array and puts it at the beginning
	if (output.includes('-')) {
		output.pop();
		output.unshift('-');
	}

	// Joins the array
	let join = output.join();

	// Removes the ',' from the join
	let replace = join.replace(/,/g, '');
	//a = x.toString();
	if (parseInt(replace) === x && !replace.includes('-')) {
		return true;
	}
	return false;
};

console.log(isPalindrome(121));
*/
