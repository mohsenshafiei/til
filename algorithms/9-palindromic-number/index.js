const palindromicNumber = (value) => {
	const str = value.toString();
	let i = 0;
	let j = str.length - 1;

	while (i < j) {
		if (str[i] !== str[j]) return false;
		i += 1;
		j -= 1;
	}
	return true;
};

const log = console.log;

const test = (expectedValue, fn, ...args) => {
  if (fn(...args) === expectedValue) log('test passed!')
  else log('test failed');
}

log(test(true, palindromicNumber, 121))
log(test(false, palindromicNumber, -121))
log(test(false, palindromicNumber, 10))
log(test(false, palindromicNumber, 123131))
