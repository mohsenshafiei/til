// This is just an example for SSR and it is not complete
import path from "path";
import fs from "fs";

import express from "express";
import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

const PORT = 8000;

const app = express();

const router = express.Router();

const serverRenderer = (req, res, next) => {
  const htmlPath = path.resolve("./build/index.html");
  fs.readFile(htmlPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
};

router.use("^/$", serverRenderer);

// This will help to serve static files like CSS and other
router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
