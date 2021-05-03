const EventEmitter = require('events');

const emitter = new EventEmitter();

const someFunction = () => console.log("hello!");
const anotherFunction = () => console.log("bye!");
const handleError = (err) => console.log(err)

emitter.on("hello", someFunction);
emitter.once("bye", anotherFunction);
emitter.on("error", handleError);

setTimeout(() => emitter.emit("hello"), 3000);
setTimeout(() => emitter.emit("bye"), 4000);
setTimeout(() => emitter.emit("bye"), 5000);

// You can also pass arguments to your listener function with the emit method.
setTimeout(() => emitter.emit("error", 9), 5000);

console.log(emitter.eventNames());

// emitter.getMaxListeners()
// emitter.setMaxListeners()
// emitter.listeners()
// emitter.off()
// emitter.prependOnceListener();
// emitter.prependListener()
// emitter.removeAllListeners()
// emitter.removeListener()



// By default, event listeners are invoked in the order they are added. 
// The emitter.prependListener() method can be used as an alternative to
// add the event listener to the beginning of the listeners array.

const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');

// Prints:
//   b
//   a


// There is an edge case worth noting when using the events.once() 
// function to await multiple events emitted on in the same batch of
// process.nextTick() operations, or whenever multiple events are
// emitted synchronously.

const myEv = new EventEmitter();

async function foo() {
  await myEv.once(myEE, 'bar');
  console.log('bar');
  // This Promise will never resolve because the 'foo' event will
  // have already been emitted before the Promise is created.
  await myEv.once(myEE, 'foo');
  console.log('foo');
}

process.nextTick(() => {
  myEv.emit('bar');
  myEv.emit('foo');
});

foo().then(() => console.log('done'));


// To Resolve above issue
const myEve = new EventEmitter();
const foo = async () => {
  await Promise.all([once(myEve, 'bar'), once(myEve, 'foo')]);
  console.log('foo', 'bar');
}

process.nextTick(() => {
  myEve.emit('bar');
  myEve.emit('foo');
});

foo().then(() => console.log('done'));