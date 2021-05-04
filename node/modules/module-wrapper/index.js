const a = require('./a');

console.log(a);

// Before a module's code is executed, Node.js will wrap it
// with a function wrapper that looks like the following:

(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});


// By doing this, Node.js achieves a few things:

// It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.
// It helps to provide some global-looking variables that are actually specific to the module, such as:
// The module and exports objects that the implementor can use to export values from the module.
// The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.


console.log(require.main);

// It will return 

// Module {
//   id: '.',
//   path: '<path>/modules/module-wrapper',
//   exports: {},
//   filename: '<path>/modules/module-wrapper/index.js',
//   loaded: false,
//   children: [
//     Module {
//       id: '<path>/modules/module-wrapper/a.js',
//       path: '<path>/modules/module-wrapper',
//       exports: [Object],
//       filename: '<path>/modules/module-wrapper/a.js',
//       loaded: true,
//       children: [],
//       paths: [Array]
//     }
//   ],
//   paths: [
//     '<path>/modules/module-wrapper/node_modules',
//     '<path>/modules/node_modules',
//     '<path>/node_modules',
//     '<path>_modules',
//     '<path>/node_modules',
//     '<path>/node_modules',
//     '<path>/node_modules',
//     '/node_modules'
//   ]
// }



// __dirname
// __filename
// exports -> a reference to module.exports
// module -> a reference to current module
// require.cache -> modules are cached in this object
// require.extensions -> configure require to understand how to handle some files
// require.main -> The Module object representing the entry script loaded when the Node.js process launched
// module.children
// module.exports
// module.filename
// module.id
// module.isPreloading -> Type: <boolean> true if the module is running during the Node.js preload phase.
// module.loaded -> Whether or not the module is done loading, or is in the process of loading.
// module.parent
// module.path
// module.paths