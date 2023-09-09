function admin(isAdmin) {
	return function (constructor) {
		constructor.prototype.isAdmin = isAdmin;
	};
}

@admin(false)
class User {
	constructor(name, role) {
		this.name = name;
		this.role = role;
	}
}

@admin(true)
class Manager {
	constructor(name, role) {
		this.name = name;
		this.role = role;
	}
}

console.log(new User("User1", "User").isAdmin); // prints false
console.log(new Manager("Manager1", "Manager").isAdmin); // prints true
