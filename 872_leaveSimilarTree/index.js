
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
    /**
     * @function
     * @param {[TreeNode]} root
     * @return {[]}
     */
    function getLeaves(root) {
        // 递归
        if (!root) {
            return [];
        }
        if (root.left === null && root.right === null) { // 叶子节点
            return [root.val];
        } else {
            // console.log(root.val);
            return getLeaves(root.left).concat(getLeaves(root.right));
        }
    }

    let leaves1 = getLeaves(root1);
    let leaves2 = getLeaves(root2);
    let len = Math.max(leaves1.length, leaves2.length);
    for (let i=0; i<len; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    return true;
};

const {TreeNode} = require('../TreeNode');

let treeA = TreeNode.from([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
let treeB = TreeNode.from([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]); // eslint-disable-line
console.log(leafSimilar(treeA, treeB));

