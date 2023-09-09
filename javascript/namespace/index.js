// Since creating and defining functions will
// pollute the namespace, to put all modules into one file
// we need to use IIFE to avoid this

(function () {
	function fun1() {
		console.log("This is a first definition");
	}
	fun1();
})();

(function () {
	function fun1() {
		console.log("This is a second definition");
	}
	fun1();
})();

// Another approach is

{
	let myFunction = function fun1() {
		console.log("This is a first definition");
	};
	myFunction();
}
//myFunction(): ReferenceError: myFunction is not defined.

{
	let myFunction = function fun1() {
		console.log("This is a second definition");
	};
	myFunction();
}
