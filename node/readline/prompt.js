// The readline module provides an interface for reading 
// data from a Readable stream (such as process.stdin) one 
// line at a time. It can be accessed using:

const readline= require("readline");
const AbortController = require('node-abort-controller')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timeout = 10000;
const ac = new AbortController();
const signal = ac.signal;

rl.setPrompt("Guess the number?\n");
rl.prompt();
rl.on("line", (answer) => {
  rl.question("Guess the number?\n", { signal })
  console.log(`You answer is ${answer}.`);
  rl.prompt();
})

signal.addEventListener('abort', () => {
  console.log('The question timed out');
  process.exit();
}, { once: true });

setTimeout(() => ac.abort(), timeout);

// rl.close: closes rl interface
// rl.pause: gives you ability to pause rl interface and resume later
// rl.resume: will resume the input stream
// rl.prompt: is to resume rl interface
// rl.question
// rl.setPrompt: set the prompt that will be written in the output whenever prompt will call


// Events
// Event: 'close'
// Event: 'line'
// Event: 'history'
// Event: 'pause'
// Event: 'resume'
// Event: 'SIGCONT'
// Event: 'SIGINT'
// Event: 'SIGTSTP'