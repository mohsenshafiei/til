function isBrowser() {
	return typeof window !== "undefined" && typeof document !== "undefined";
}

if (isBrowser()) {
	sessionStorage.setItem("name", "Mohsen");
	sessionStorage.setItem("age", "18");

	const name = sessionStorage.getItem("name");
	const age = sessionStorage.getItem("age");

	console.log(name, age);
} else {
	console.log("Please run this code in the browser");
}

const isRemovingSessionStorage = false;

if (isRemovingSessionStorage) {
	sessionStorage.clear();
}
