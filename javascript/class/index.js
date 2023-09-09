class Student {
	constructor(name) {
		this.name = name;
	}

	print() {
		console.log(this.name);
	}
}

const Mohsen = new Student("Mohsen");
const Majid = new Student("Majid");

Mohsen.print();
Majid.print();