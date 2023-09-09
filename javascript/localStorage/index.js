function isBrowser() {
	return typeof window !== "undefined" && typeof document !== "undefined";
}

if (isBrowser()) {
	localStorage.setItem("name", "Mohsen");
	localStorage.setItem("age", "18");

	const name = localStorage.getItem("name");
	const age = localStorage.getItem("age");

	console.log(name, age);
} else {
	console.log("Please run this code in the browser");
}
