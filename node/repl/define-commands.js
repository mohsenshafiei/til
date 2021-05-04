const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });

replServer.defineCommand('sayhello', {
  help: 'Say hello',
  action(name) {
    this.clearBufferedCommand();
    console.log(`Hello, ${name}!`);
    this.displayPrompt();
  }
});

replServer.defineCommand('saybye', function saybye() {
  console.log('Goodbye!');
  this.close();
});


// How to use

// > .sayhello Node.js User
// Hello, Node.js User!
// > .saybye
// Goodbye!