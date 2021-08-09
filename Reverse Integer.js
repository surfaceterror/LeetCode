const doThings = (x) => {
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
  
	// Checks if replace is within range
	if (replace > 2147483647 || replace < -2147483648) {
		return 0;
	} else {
		return replace;
	}
};
