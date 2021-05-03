const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const number = 5;
logger.log('number:', number);
// In stdout.log: number 5
const code = 9
logger.error('error code:', code);