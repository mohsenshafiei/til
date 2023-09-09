class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(item) {
		let node = new Node(item);
		if (!this.head) {
			this.tail = node;
			this.head = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	deduplicate() {
		if (!this.head) {
			return;
		}
		let seen = new Set();
		let current = this.head;
		let previous = null;
		while (current != null) {
			if (seen.has(current.value)) {
				previous.next = current.next;
			} else {
				seen.add(current.value);
				previous = current;
			}
			current = current.next;
		}
	}

	traverse() {
		if (!this.head) {
			return;
		} else {
			let pivot = this.head;
			while (pivot !== null) {
				console.log(pivot.value);
				pivot = pivot.next;
			}
		}
	}
}

let myLinkedList = new LinkedList();

myLinkedList.append(1);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(2);
myLinkedList.append(2);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(3);
myLinkedList.deduplicate();
myLinkedList.traverse();
