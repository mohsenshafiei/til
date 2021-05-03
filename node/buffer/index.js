const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.alloc(5, 15);
console.log(buf2);

// This, as the name suggests, is unsafe as it returns a Buffer that may or may not be empty.
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);


buf3.fill(1);
console.log(buf3);

buf2.write("abcedf");
console.log(buf2);

// Another popular method is the from method. It takes whatever it is passed and creates a Buffer from it.
const buf4 = Buffer.from([265, 6.5, -255, '7']);
console.log(buf4);

const buf5 = Buffer.from('Hello world');
console.log(buf5);

console.log(buf5.toString());

// While we did state that buffers only store data as integers, 
// when we output a buffer, it is represented in hexadecimal notation. 
// This makes it easier and shorter to read.


// When converting between Buffers and strings, a character encoding may be specified
// If no character encoding is specified, UTF-8 will be used as the default.
const buf = Buffer.from('hello world', 'utf8');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=

console.log(Buffer.from('fhqwhgads', 'utf8'));
// Prints: <Buffer 66 68 71 77 68 67 61 64 73>
console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>