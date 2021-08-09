let a = '00000010100101000001111010011100';
/*
let bin2dec = (n, base = 2) => {
	x = parseInt(n, base);
	return x;
};

const dec2bin = (dec) => {
	return (dec >>> 2).toString(2);
};

b = bin2dec(a);
//console.log(b);
*/

const reverseBits = (n) => {
	const doThings = (x) => {
		let sx = x.toString();
		let len = sx.length;
		let output = [];
		for (let i = 0; i < len; i++) {
			output.push(sx[i]);
		}
		output.reverse();
		if (output.includes('-')) {
			output.pop();
			output.unshift('-');
		}
		let join = output.join();
		let replace = join.replace(/,/g, '');
		return replace;
	};
	let bin2dec = (n, base = 2) => {
		let x = parseInt(n, base);
		return x;
	};

	// reversing n
	let a = doThings(n);
	let b = bin2dec(a);
	let awnser = b + ' ' + '(' + a + ')';
	return awnser;
};

console.log(reverseBits('00000010100101000001111010011100'));
