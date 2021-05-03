console.log("my name is mohsen shafiei.")

console.warn("This is just a simple warning.")

console.error("OMG, this is error.")

console.error(new Error("OMG, throw error!"));
// Error objects capture a stack trace, which points to where the Error was instantiated in the code.

const smallFunction = () => console.trace('Let us look at the trace');
const bigFunction = () => smallFunction()
bigFunction()
// TRACE PATTERN:  at <function name> (/<file location>/<file namae>:<line number>:<column number>)


console.time('For loop time');
for (let i = 0; i < 100; i++) {
  // processing something
}
console.timeEnd('For loop time');

console.table([{ "Fruit": "Apple", "Quantity": 5 }, { "Fruit": "Mango", "Quantity": 7 }]);