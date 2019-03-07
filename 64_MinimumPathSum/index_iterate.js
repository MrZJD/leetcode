

/**
 * @param {[][]} grid
 * @return {number}
 * @desc 递归 -> 迭代
 */
let minPathSum = function(grid) {
    function existPush (dist, source) {
        let distRoutines = dist
        let exist = false
        for (let k = 0, len = distRoutines.length; k < len; k++) {
            if (source.x === distRoutines[k].x && source.y === distRoutines[k].y) {
                distRoutines[k].value = Math.min(source.value, distRoutines[k].value)
                exist = true
                break
            }
        }

        if (!exist) distRoutines.push(source)

        return distRoutines
    }

    let xlen = grid[0].length
    let ylen = grid.length

    let treeDeep = 2 * Math.min(xlen, ylen) + Math.abs(ylen - xlen) - 1 // 所需步数 到达终点步数是确定的
    let routine = [{
        value: grid[0][0],
        x: 0,
        y: 0,
    }]

    for (let step = 1; step < treeDeep; step++) {
        let distRoutines = []

        routine.forEach(val => {
            let currNode = val
            let currVal = currNode.value

            if (currNode.x === xlen && currNode.y === ylen) {
                // 到达结尾点
                distRoutines.push(currNode)
                return
            }
            hasSteps = true

            if (currNode.x < xlen - 1) { // 往右走一步
                let rightNode = {
                    value: currVal + grid[currNode.y][currNode.x + 1],
                    x: currNode.x + 1,
                    y: currNode.y,
                }

                existPush(distRoutines, rightNode)
            }

            if ( currNode.y < ylen - 1 ) { // 往下走一步
                let downNode = {
                    value: currVal + grid[currNode.y + 1][currNode.x],
                    x: currNode.x,
                    y: currNode.y + 1,
                }

                existPush(distRoutines, downNode)
            }
        })

        routine = distRoutines
    }

    return routine[0].value
};

// console.log( minPathSum([[1]]) )

// console.log( minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
// ]) ) // 7

// console.log( minPathSum([
//     [1, 2, 5],
//     [3, 2, 1],
// ]) ) // 6

// console.log( minPathSum([[7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5], [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6], [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8], [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4], [7, 1, 3, 1, 8, 8, 3, 1, 2, 1, 5, 0, 2, 1, 9, 1, 1, 4], [9, 5, 4, 3, 5, 6, 1, 3, 6, 4, 9, 7, 0, 8, 0, 3, 9, 9], [1, 4, 2, 5, 8, 7, 7, 0, 0, 7, 1, 2, 1, 2, 7, 7, 7, 4], [3, 9, 7, 9, 5, 8, 9, 5, 6, 9, 8, 8, 0, 1, 4, 2, 8, 2], [1, 5, 2, 2, 2, 5, 6, 3, 9, 3, 1, 7, 9, 6, 8, 6, 8, 3], [5, 7, 8, 3, 8, 8, 3, 9, 9, 8, 1, 9, 2, 5, 4, 7, 7, 7], [2, 3, 2, 4, 8, 5, 1, 7, 2, 9, 5, 2, 4, 2, 9, 2, 8, 7], [0, 1, 6, 1, 1, 0, 0, 6, 5, 4, 3, 4, 3, 7, 9, 6, 1, 9]]) ) // out of memory // 85

console.log( minPathSum([[3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3], [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2], [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9], [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7], [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8], [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9], [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1], [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3], [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3], [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8], [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3], [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3], [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3], [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5], [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2], [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0], [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0], [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]]) ) // out of time // 83
