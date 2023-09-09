class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(item) {
		const node = new Node(item);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size = this.size + 1;
	}

	print() {
		let current = this.head;
		while (current != null) {
			console.log(current.value);
			current = current.next;
		}
	}

	getSize() {
		return this.size;
	}

	removeAt(index) {
		if (index > this.getSize() || index < 0) {
			console.log("Index is out of bounds of linked list");
			return false;
		}

		if (index === 0) {
			this.head = this.head.next;
		} else {
			let pivot = this.head;
			let prev = null;
			let count = 0;

			while (count < index && pivot !== null) {
				prev = pivot;
				pivot = pivot.next;
				count++;
			}
			if (prev && pivot) {
				prev.next = pivot.next;
			}
			if (pivot === this.tail) {
				this.tail = prev;
			}
		}
		this.size--;
	}

	removeNthFromEndOfList(n) {
		this.removeAt(this.getSize() - n);
	}
}


const ll = new LinkedList();
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
console.log(ll.getSize());
console.log(ll.print());
ll.removeNthFromEndOfList(2)
console.log(ll.print());