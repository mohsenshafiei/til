class Logger {
  constructor() {
    this.map = {};
  }
  shouldPrintMessage(timestamp, message) {
    if (this.map[message] === undefined || (this.map[message] !== undefined && timestamp - this.map[message] >= 10) ) {
      this.map[message] = timestamp;
      return true;
    }
    return false;
  }
}

const obj = new Logger();

console.log(obj.shouldPrintMessage(0, "A"))
console.log(obj.shouldPrintMessage(0, "B"))
console.log(obj.shouldPrintMessage(0, "C"))
console.log(obj.shouldPrintMessage(0, "A"))
console.log(obj.shouldPrintMessage(0, "B"))
console.log(obj.shouldPrintMessage(0, "C"))
console.log(obj.shouldPrintMessage(0, "A"))
console.log(obj.shouldPrintMessage(0, "B"))
console.log(obj.shouldPrintMessage(0, "C"))

