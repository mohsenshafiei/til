#! /usr/bin/env node

const testFolder = "./";
const fs = require("fs");
const minimist = require("minimist");
const { spawn } = require("child_process");

const createFile = (dir, file) => spawn("touch", [`${dir}/${file}`]);
const removeFile = (dir, file) => spawn("rm", ["-rf", `${dir}/${file}`]);
const returnToRoot = () => spawn("cd", [".."]);

const createReadme = () => {
  fs.readdirSync(testFolder).forEach((dir) => {
    createFile(dir, "README.md");
    returnToRoot();
  });
};

const removeReadme = () => {
  fs.readdirSync(testFolder).forEach((dir) => {
    removeFile(dir, "README.md");
    returnToRoot();
  });
};

const main = () => {
  const args = minimist(process.argv.slice(2));
  const { clean, create } = args;
  if (create) {
    createReadme();
    return;
  }
  if (clean) {
    removeReadme();
    return;
  }
};

main();
