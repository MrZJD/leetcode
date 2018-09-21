/**
 * @param {[[number]]} matrix n * n
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    // 1. -> 斜对角对称变换
    let MY = matrix.length;
    let MX = matrix[0].length;

    let temp = null;
    for (let y=0; y<MY; y++) {
        for (let x=y; x<MX; x++) {
            temp = matrix[y][x];
            matrix[y][x] = matrix[x][y];
            matrix[x][y] = temp;
        }
    }

    // 2. -> 左右对称变化
    temp = null;
    let XMiddle = MX/2 >> 0;
    for (let y=0; y<MY; y++) {
        for (let x=0; x<XMiddle; x++) {
            temp = matrix[y][x];
            matrix[y][x] = matrix[y][MX-x-1];
            matrix[y][MX-x-1] = temp;
        }
    }

    return null;
};

let target = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

rotate(target);

console.log(JSON.stringify(target));
