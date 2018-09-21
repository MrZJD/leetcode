/**
 * @class
 * @constructor
 * @param {*} val
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    return this;
}

/**
 * @static
 * @function
 * @param {[]} arr Nodes
 * @return {TreeNode}
 */
TreeNode.from = function(arr) {
    // [3,5,1,6,2,9,8,null,null,7,4]
    let nodes = new Array(arr.length);
    for (let i=0, len=arr.length; i<len; i++) {
        nodes[i] = arr[i] === null ? null : new TreeNode(arr[i]);
    }

    let line = 0;
    let si = Math.pow(2, line) - 1;
    let nextSi = Math.pow(2, line+1) - 1;
    while (si <= arr.length) {
        let count = 0;
        while (si < nextSi) {
            if (nodes[si] === undefined || nodes[si] === null) {
                count++;
                si++;
                continue;
            }
            nodes[si].left = nodes[nextSi + count*2] || null;
            nodes[si].right = nodes[nextSi + count*2 + 1] || null;
            count++;
            si++;
        }
        line++;
        si = nextSi;
        nextSi = Math.pow(2, line+1) - 1;
    }
    return nodes[0];
};

// let head = new TreeNode(1);
// let left = new TreeNode(2);
// let right = new TreeNode(3);
// head.left = left;
// head.right = right;

// let tree = TreeNode.from([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
let tree = TreeNode.from([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]); // eslint-disable-line
// console.log(tree);

exports.TreeNode = TreeNode;
