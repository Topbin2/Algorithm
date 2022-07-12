var increasingBST = function(root) {
    const nodes = [];

    function traverse(root) {
      if(root.left) traverse(root.left);
      nodes.push(root.val);
      if(root.right) traverse(root.right);
    }

    traverse(root);
    
    const result = new TreeNode();
    let copy = result;
    
    for(let i = 0; i < nodes.length; i++) {
        if(i === 0) {
            copy.val = nodes[i];
            continue;
        }
        
        const newTree = new TreeNode(nodes[i]);
        copy.right = newTree;
        copy = copy.right;
    }
    
    return result;
};