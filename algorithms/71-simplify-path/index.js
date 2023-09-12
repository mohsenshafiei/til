const test = (expectedValue, fn, ...args) => {
  const result = fn(...args);
  if (expectedValue === result) {
    console.log("Passed", expectedValue, result);
    return true;
  }
  console.log("Failed", expectedValue, result);
  return false;
};

const simplifyPath = (path) => {
  let stack = [];
  let parts = path.split("/");

  console.log(parts);

  for (let part of parts) {
    if (part === "..") {
      stack.pop(); // Go up a directory by popping
    } else if (part && part !== ".") {
      // If not empty and not current directory
      stack.push(part);
    }
  }

  console.log(stack, parts);

  return "/" + stack.join("/");
};

test("/home", simplifyPath, "/home/");
test("/", simplifyPath, "/../");
test("/home/foo", simplifyPath, "/home//foo/");
