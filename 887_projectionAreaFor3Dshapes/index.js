'use strict';
/**
 * @param {[][]} grid
 * @return {number}
 */
let projectionArea = function(grid) {
    // 定义方向规则
    // grid[x][y] -> x, y, num

    // 正投影
    let frontnum = 0;

    // 左投影
    let sidenum = 0;
    let sideTable = {};

    // 垂直投影 -> 无需计算个数
    let znum = 0;

    for (let x=0, xlen=grid.length; x<xlen; x++) {
        let blockMax = 0;

        for (let y=0, ylen=grid[x].length; y<ylen; y++) {
            // 计算垂直投影
            grid[x][y] > 0 ? (znum++) : '';

            // 计算正投影
            blockMax = Math.max(blockMax, grid[x][y]);

            // 记录左投影
            !sideTable[y] ? (sideTable[y] = grid[x][y]) : (sideTable[y] = Math.max(sideTable[y], grid[x][y]));
        }

        frontnum += blockMax;
    }

    for (let y of Object.keys(sideTable)) {
        sidenum += sideTable[y];
    }

    // console.log([frontnum, sidenum, znum]);

    return frontnum + sidenum + znum;
};

console.log(projectionArea([[2]])); // 5
console.log(projectionArea([[1, 0], [0, 2]])); // 8
console.log(projectionArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // 14
console.log(projectionArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]])); // 21
