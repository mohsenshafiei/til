const getParentAndDepth = (root, node) => {
  let target = null;
  let parent = null;
  let depth = null;
  let found = false;
  const traverse = (root, p, d) => {
    if (root === null || found === true) return;
    if (root.val === node) {
      parent = p;
      depth = d;
      target = root;
      found = true;
      return;
    }
    traverse(root.left, root, d + 1);
    traverse(root.right, root, d + 1);
  }
  let n = traverse(root, null, 0)
  return {
    node: target, parent: parent, depth: depth
  }
}

const binaryTree = (root, nodeA, nodeB) => {
  const nodeAInfo = getParentAndDepth(root, nodeA);
  const nodeBInfo = getParentAndDepth(root, nodeB);
  if ((nodeAInfo.parent.val !== nodeBInfo.parent.val) && nodeAInfo.depth === nodeBInfo.depth) return true;
  return false
}



// correct version - beautiful!!!

const recurse = (nodes, parent, node, x, y, level) => {
  if(!node) return;
  if(nodes[0] && nodes[1]) return;
  if(node.val === x) nodes[0] = ({ level, pVal: parent.val });
  if(node.val === y) nodes[1] = ({ level, pVal: parent.val });
  recurse(nodes, node, node.left, x, y, level + 1)
  recurse(nodes, node, node.right, x, y, level + 1);    
}

const isCousins = (root, x, y) => {
  var nodes = [undefined, undefined];
  recurse(nodes, root, root, x, y, 0);
  return ((nodes[0].level === nodes[1].level) && (nodes[0].pVal !== nodes[1].pVal));
};