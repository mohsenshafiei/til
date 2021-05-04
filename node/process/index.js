// The process object is a global that provides information about, and control over, the current Node.js process

process.on("exit", () => {
  // informing user and print our the result
})

process.on("beforeExit", () => {
  // do something here like sending result data to remote DB or etc
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

// Events:

// exist
// beforeExit
// message
// multipleResolves -> resolved, rejected more than once or rejected after resolve or vice versa
// rejectedHandled
// uncaughtException
// uncaughExceptionMonitor
// unhandledRejection
// warning -> can use node --no-warnings



process.abort();
process.allowedNodeEnvironmentFlags
process.arch

// The process.argv property returns an array containing the 
// command-line arguments passed when the Node.js process was launched.
process.argv
process.argv0

// If the Node.js process was spawned with an IPC channel
// the process.channel property is a reference to the IPC channel. 
process.channel
process.connected
process.disconnect

process.chdir // change process directory

// containing the JavaScript representation of the 
//configure options used to compile the current Node.js executable
process.config

process.cpuUsage

process.cwd

process.debugPort

process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information'
});

process.env

process.execPath

process.exit()

process.kill(process.pid, "SIGHUP")

process.mainModule

process.memoryUsage()

process.nextTick() // process.nextTick() adds callback to the "next tick queue"

process.pid

process.platform // 'aix' |'darwin' |'freebsd' |'linux' |'openbsd' |'sunos' |'win32'

process.release

process.resourceUsage()

// process.send(message[, sendHandle[, options]][, callback])

process.uptime()

process.version

process.versions

// Output:

// { node: '11.13.0',
//   v8: '7.0.276.38-node.18',
//   uv: '1.27.0',
//   zlib: '1.2.11',
//   brotli: '1.0.7',
//   ares: '1.15.0',
//   modules: '67',
//   nghttp2: '1.34.0',
//   napi: '4',
//   llhttp: '1.1.1',
//   openssl: '1.1.1b',
//   cldr: '34.0',
//   icu: '63.1',
//   tz: '2018e',
//   unicode: '11.0' }



// NOTE: 

process.on('beforeExit', () => {
  console.log('blue');
});

process.on('exit', () => {
  console.log('green');
});

console.log('red')
process.exit()

// output will be

// red
// green

// Since we are calling the process.exit method directly, 
// the beforeExit event will not fire. Therefore, only red followed by 
// the green will be output to the console.