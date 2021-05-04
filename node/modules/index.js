// Modules are cached after the first time they are loaded.

// Modules are cached based on their resolved filename.
const mymodule = require("./mymodule");

// The core modules are defined within the Node.js source and are located in the lib/ folder.

// Core modules are always preferentially loaded if their identifier is passed to require(). 
// For instance, require('http') will always return the built in HTTP module, even if there is a file by that name.


// If the module identifier passed to require() is not a core module, 
// and does not begin with '/', '../', or './', then Node.js starts at the parent 
// directory of the current module, and adds /node_modules, and attempts 
// to load the module from that location. Node.js will not append node_modules to 
// a path already ending in node_modules.