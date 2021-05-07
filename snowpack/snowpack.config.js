// const proxy = require('http2-proxy');

// const cert = fs.readFileSync('/path/to/server.crt');
// const key = fs.readFileSync('/path/to/server.key');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'], // add third party plugins here to support differnt files and etc
  routes: [
    // This tells Snowpack’s dev server to serve the fallback /index.html URL for all routes (.* in RegEx means “match everything”).
    // {"match": "routes", "src": ".*", "dest": "/index.html"} -> ` want to define a single “catch-all” route for development
    // "match": "routes" refers to all URLs that either do not include a file extension or that include the “.html” file extension
    
    
    //you can configure Snowpack to proxy some requests to another server :
    
    // {
    //   src: '/api/.*',
    //   dest: (req, res) => {
    //     // remove /api prefix (optional)
    //     req.url = req.url.replace(/^\/api/, '');
    //     return proxy.web(req, res, {
    //       hostname: 'localhost',
    //       port: 3001,
    //     });
    //   }
    // }

  ],
  optimize: {
    // entrypoints: 'auto' | string[] | ((options: {files: string[]}) => string[]);
    // preload: boolean;
    // bundle: boolean;
    // sourcemap: boolean | 'external' | 'inline' | 'both';
    // splitting: boolean;
    // treeshake: boolean;
    // manifest: boolean;
    // minify: boolean;
    // target: 'es2020' | 'es2019' | 'es2018' | 'es2017';
  },
  packageOptions: {
    // This tells Snowpack to fetch your imports from the Skypack CDN instead of bundling them locally.
    // THis approach called Streaming Imports
    // Streaming dependencies have several benefits over the traditional “npm install + local bundling” approach
    // BENEFITS:
    
    // Speed: Skip the install + build steps for dependencies, and load 
    // your dependencies as pre-build ESM code directly from an ESM CDN like Skypack.
    
    // Safety: ESM packages are pre-built and never given access to 
    // run code on your machine. Packages only run in the browser sandbox.
    
    // Simplicity: ESM packages are managed by Snowpack, so frontend projects 
    // that don’t need Node.js (Rails, PHP, etc.) can drop the npm CLI entirely if they choose.
    
    // No Impact on Final Build

    // "source": "remote"


    //Setting types=true tells Snowpack to install TypeScript types in your project.
    // types: true

    // "external": ["fs"] -> Mark some imports as external. Snowpack will ignore these imports and leave them as-is in your final build.
  },
  devOptions: {
    // secure: {cert, key}, -> add ssl cert for HTTPS support
    // hostname: default is localhost
    // port
    // openUrl: Optional path to append to dev server url. May also include querystring parameters, example: test/foo.html?bar=123
    // fallback: index.html -> The HTML file to serve for non-resource routes
    // open: -> Configures how the dev server opens in the browser when it starts.
    // output -> dashboard | steram -> Set the output mode of the dev console
    // hmr: true -> Toggles HMR on the Snowpack dev server.
    // hmrDelay: 0 (millisecond) Milliseconds to delay HMR-triggered browser update.
    // hmrPort: The port where Snowpack’s HMR Websocket runs.
    // hmrErrorOverlay: true -> Toggles a browser overlay that displays JavaScript runtime errors when running HMR.

  },
  buildOptions: {
    // out: <path> -> The local directory that we output your final build to.
    // baseUrl
    // clean: false -> default is true which is better -> Set to false to prevent Snowpack from deleting the build output folder
    // sourcemap: boolean -> still in progress
    // watch: boolean -> Run Snowpack’s build pipeline through a file watcher.
    // htmlFragments: boolean -> Toggles whether HTML fragments are transformed like full HTML pages.
    // buildOptions.jsxFactory
  },
};


// Snowpack uses a snowpack.deps.json in your project to manage your dependency versions. 
// If you’re familiar with npm install, your snowpack.deps.json file is like a combined package.json and package-lock.json.