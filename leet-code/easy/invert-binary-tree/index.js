const TreeNode = (val, left, right) =>  {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const invertTree = (node) => {
  if (!node) return null
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  invertTree(node.left);
  invertTree(node.right);
  return node;
}
