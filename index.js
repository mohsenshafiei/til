#! /usr/bin/env node

const testFolder = "./";
const fs = require("fs");
const minimist = require("minimist");
const { spawn } = require("child_process");

const createDir = (name) => spawn("mkdir", [`./${name}`]);
const createFile = (dir, file) => spawn("touch", [`${dir}/${file}`]);
const removeFile = (dir, file) => spawn("rm", ["-rf", `${dir}/${file}`]);
const returnToRoot = () => spawn("cd", [".."]);

const createReadme = () => {
  fs.readdirSync(testFolder).forEach((dir) => {
    createFile(dir, "README.md");
    returnToRoot();
  });
};

const createFolderAndAddReadmeMe = async (name) => {
  const res = await createDir(name);
  createFile(name, "README.md");
};

const removeReadme = () => {
  fs.readdirSync(testFolder).forEach((dir) => {
    removeFile(dir, "README.md");
    returnToRoot();
  });
};

const main = () => {
  const args = minimist(process.argv.slice(2));
  console.log(args);
  const { clean, create, mkdir, name } = args;
  if (create) {
    createReadme();
    return;
  }
  if (clean) {
    removeReadme();
    return;
  }
  if (mkdir) {
    if (name) createFolderAndAddReadmeMe(name);
    else console.log("Package name is empty. (npm run mkdir --name=<directory_name>)");
  }
};

main();
