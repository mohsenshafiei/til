class MovingAverage {
  constructor(size) {
    this.size = size;
    this.window = [];
  }
  next(value) {
    let sum = 0;
    this.window.push(value);
    let count = this.window.length < this.size ? this.window.length : this.size; 
    let start = this.window.length - this.size < 0 ? 0 : this.window.length - this.size;
    this.window.slice(start, this.window.length).map((item) => {
      sum += item;
    });
    return sum / count
  }
}

const obj = new MovingAverage(3);
console.log(obj.next(1))
console.log(obj.next(10))
console.log(obj.next(3))
console.log(obj.next(5))