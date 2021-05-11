const searchBST = (root, val) => {
  if (!root || !root.val) return null;
  if (root.val === val) return root;
  if (root.val < val) return searchBST(root.right, val);
  else return searchBST(root.left, val);
};