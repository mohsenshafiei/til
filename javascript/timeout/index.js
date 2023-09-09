let timeout = null;

const greetings = () => {
	console.log("hello");
};

const sayHello = () => {
	timeout = setTimeout(() => {
		greetings();
		goodbye();
	}, 3000);
};

const goodbye = () => {
	clearTimeout(timeout);
	console.log("setTimeout cleared!");
};

sayHello();
