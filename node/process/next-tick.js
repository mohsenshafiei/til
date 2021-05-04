console.log('start');

setTimeout(() => {
  console.log("set timeout");
}, 0);

setImmediate(() => {
  console.log("set immediate");
})

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('scheduled');
// Output:

// start
// scheduled
// nextTick callback
// set timeout
// set immediate