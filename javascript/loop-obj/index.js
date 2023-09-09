class MyObj {
	constructor() {
		this.map = {};
	}

	add(key, value) {
    if (key && value) {
      this.map[key] = value;
    } else {
      console.log('Something is missing or wrong! Please try again.')
    }
		
	}

	print() {
		for (let key in this.map) {
			console.log(key, this.map[key]);
		}
	}
}

const obj = new MyObj();

obj.add(3, 'mohsen')
obj.add(4, 'majid')
obj.add(1, 'ali')
obj.add(2)
obj.print();
