let findSubPath = function (tree, startX, startY) {
    let depth = tree.length - startY
    let startVal = tree[startY][startX]

    if (depth === 1) {
        return startVal
    } else {
        return startVal + Math.min(findSubPath(tree, startX, startY + 1), findSubPath(tree, startX + 1, startY + 1))
    }
}

/**
 * @param {[[number]]} triangle
 * @return {number}
 */
// let minimumTotal = function(triangle) { // 递归
//     return findSubPath(triangle, 0, 0)
// };

let minimumTotal = function (triangle) {
    // -> 递归 转 迭代
    let len = triangle.length

    for (let i = len - 1; i > 0; i--) { // 从最后一排向上叠加
        for (let n = 0; n < i; n++) {
            triangle[i - 1][n] += Math.min(triangle[i][n], triangle[i][n + 1])
        }
    }

    return triangle[0][0]
}

console.log(minimumTotal([
    [2],
]));
console.log(minimumTotal([
    [2],
    [1, 2],
]));
console.log(minimumTotal([
    [2],
    [1, 2],
    [5, 2, 3],
]));
