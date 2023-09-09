function memoize(fn) {
  let cache = {};
  return function(...args) {
    let key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      let result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}