const sumNumbers = (root) => {
  const rootToLeafs = [];
  if (!root) return 0;

  const traverse = (node, str) => {
    if (node === null) return;
    str += node.value.toString();
    if (node.left === null && node.right === null) {
      rootToLeafs.push(str);
      return;
    }
    if (node.left) traverse(node.left, str);
    if (node.right) traverse(node.right, str);
  };

  traverse(root, "");

  let sum = 0;
  for (let str of rootToLeafs) {
    sum += parseInt(str, 10);
  }

  return sum;
};
