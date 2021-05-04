const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const {
  createReadStream,
  createWriteStream
} = require('fs');
const fs = require('fs');

const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

try {
    const stats = fs.statSync('input.txt');
    console.log('Origin', stats);
} catch (err) {
    console.log(err);
}

try {
    const stats = fs.statSync('input.txt.gz');
    console.log('Destination File:', stats);
} catch (err) {
    console.log(err);
}