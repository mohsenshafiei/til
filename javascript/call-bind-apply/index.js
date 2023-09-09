const objA = {
	name: "Mohsen",
	age: 30,
};

const objB = {
	name: "Mohsen",
	age: 30,
};

function printSomething(greeting1, greeting2) {
	console.log(greeting1, this.name, this.age, greeting2);
}

printSomething.call(objA, "Hello", "How are you?")
printSomething.call(objB, "Hello", "How are you today?")

printSomething.apply(objA, ["Hello", "How are you?"])
printSomething.apply(objB, ["Hello", "How are you today?"])
