var reverseBits = function (n) {
	const dec2bin = (dec) => {
		return (dec >>> 2).toString(2);
	};

	let bin2dec = (n, base = 2) => {
		x = parseInt(n);
		//console.log(parseInt(n));
		return x;
	};

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
	a = dec2bin(n);
	console.log(a);
	reversedbinary = doThings(n);
	let rbnum = bin2dec(reversedbinary);
	let awnser = rbnum + ' ' + '(' + reversedbinary + ')';
	//return awnser;
};

let bin2dec = (n, base = 2) => {
	x = parseInt(n, base);
	return x;
};

a = '00000010100101000001111010011100';

n = bin2dec(a);
console.log(reverseBits(n));
/*
Steps:

1. reverse binary (save to reversedbinary)
2. convert reversedbinary to decimal. Save to rbnum
3. return rbnum + (reversedbinary)

*/
