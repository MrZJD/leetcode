/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function isSideTreeSymmetric (leftTree, rightTree) {
    if (!leftTree && !rightTree) {
        return true
    }

    if (
        !leftTree ||
        !rightTree ||
        (leftTree.val !== rightTree.val)
    ) {
        return false
    }

    return isSideTreeSymmetric(leftTree.left, rightTree.right) && isSideTreeSymmetric(leftTree.right, rightTree.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
    if (!root) return true
    return isSideTreeSymmetric(root.left, root.right)
};

let tree1 = new TreeNode(1)
tree1.left = new TreeNode(2)
tree1.right = new TreeNode(2)
tree1.left.left = new TreeNode(3)
tree1.left.right = new TreeNode(4)
tree1.right.left = new TreeNode(4)
tree1.right.right = new TreeNode(3)

console.log(isSymmetric(tree1)) // true

let tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(2)
tree2.left.right = new TreeNode(3)
tree2.right.right = new TreeNode(3)

console.log(isSymmetric(tree2)) // false
