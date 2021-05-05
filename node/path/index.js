const path = require('path');

const p = '/foo/bar/baz/asdf/quux.html'
const q = '/foo/bar/baz/asdf/goux'
const paths = [p, q];

path.dirname(p) // /foo/bar/baz/asdf
path.extname(p) // html

path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
// Returns: '/home/user/dir/file.txt'

path.isAbsolute(p)

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..');
// Returns: '/foo/bar/baz/asdf'

path.parse('/home/user/dir/file.txt');
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// returns the relative path from from to to based on the current working directory. 
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// Returns: '..\\..\\impl\\bbb'

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

'foo/bar/baz'.split(path.sep);
// Returns: ['foo', 'bar', 'baz']
