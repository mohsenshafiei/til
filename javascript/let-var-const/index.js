const fn = () => {
	console.log(z); // undefind
	console.log(x); // ReferenceError
	console.log(y); // ReferenceError
	const x = 3;
	let y = 2;
	var z = 12;
};

fn();
console.log(z); // function scope
console.log(x); // blocked scope and not hoisted
console.log(y); // blocked scope and not hoisted
