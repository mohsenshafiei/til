const myFunction = (num) => {
	switch (num) {
		case 1: {
			console.log("is 1");
			return true;
		}
		case 2: {
			console.log("is 2");
			return true;
		}
		case 3: {
			console.log("is 3");
			return true;
		}
		default: {
			console.log("is something else");
			return false;
		}
	}
};


myFunction(2)
myFunction(1)
myFunction(3)
myFunction(12)

