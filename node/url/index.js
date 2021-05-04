// ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                              href                                              │
// ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │          host          │           path            │ hash  │
// │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │    hostname     │ port │ pathname │     search     │       │
// │          │  │                     │                 │      │          ├─┬──────────────┤       │
// │          │  │                     │                 │      │          │ │    query     │       │
// "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          │  │          │          │    hostname     │ port │          │                │       │
// │          │  │          │          ├─────────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │          host          │          │                │       │
// ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
// │   origin    │                     │         origin         │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
// │                                              href                                              │
// └────────────────────────────────────────────────────────────────────────────────────────────────┘
// (All spaces in the "" line should be ignored. They are purely for formatting.)

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.protocol = 'http';

console.log(myURL.href);
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.hash)
console.log(myURL.protocol)
console.log(myURL.origin)
console.log(myURL.searchParams.get('d'))
myURL.delete('d');
console.log(myURL.href);

const params = new URLSearchParams();
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params.toString());
// Prints foo=bar&foo=baz&abc=def

params.set('foo', 'def');
params.set('xyz', 'opq');
console.log(params.toString());
// Prints foo=def&abc=def&xyz=opq

const params = new URLSearchParams('query[]=abc&type=search&query[]=123');
params.sort();
console.log(params.toString());
// Prints query%5B%5D=abc&query%5B%5D=123&type=search

const params = new URLSearchParams('foo=bar&xyz=baz');
for (const [name, value] of params) {
  console.log(name, value);
}
// Prints:
//   foo bar
//   xyz baz
