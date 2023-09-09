const myFunction = (a, b, cl) => {
	setTimeout(() => {
		console.log(a + b);
		cl();
	}, 3000);
};

const clFunction = () => {
	console.log("executing callback function");
};

myFunction(2, 3, clFunction);
