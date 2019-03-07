/**
 * @param {[][]} grid
 * @return {number}
 */
let minPathSum = function(grid) {
    let x = 0
    let y = 0
    let yLen = grid.length - 1
    let xLen = grid[0].length - 1

    let routines = [{
        value: grid[x][y],
        x: x,
        y: y,
    }]

    let hasSteps = true

    while (hasSteps) {
        let distRoutines = []
        hasSteps = false

        let i = 0
        let ilen = routines.length
        while (i < ilen) {
            let currNode = routines.pop()
            let currVal = currNode.value

            if (currNode.x === xLen && currNode.y === yLen) {
                // 到达结尾点
                distRoutines.push(currNode)
                i++
                continue
            }
            hasSteps = true

            if (currNode.x < xLen) { // 往右走一步
                distRoutines.push({
                    value: currVal + grid[currNode.y][currNode.x + 1],
                    x: currNode.x + 1,
                    y: currNode.y,
                })
            }

            if ( currNode.y < yLen ) { // 往下走一步
                distRoutines.push({
                    value: currVal + grid[currNode.y + 1][currNode.x],
                    x: currNode.x,
                    y: currNode.y + 1,
                })
            }

            i++
        }

        routines = distRoutines
    }

    let minVal = routines[0].value
    routines.forEach(node => {
        if (node.value < minVal) {
            minVal = node.value
        }
    })
    return minVal
};

// console.log( minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
// ]) ) // 7

console.log( minPathSum([
    [1, 2, 5],
    [3, 2, 1],
]) ) // 6

// console.log( minPathSum([[7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5], [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6], [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8], [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4], [7, 1, 3, 1, 8, 8, 3, 1, 2, 1, 5, 0, 2, 1, 9, 1, 1, 4], [9, 5, 4, 3, 5, 6, 1, 3, 6, 4, 9, 7, 0, 8, 0, 3, 9, 9], [1, 4, 2, 5, 8, 7, 7, 0, 0, 7, 1, 2, 1, 2, 7, 7, 7, 4], [3, 9, 7, 9, 5, 8, 9, 5, 6, 9, 8, 8, 0, 1, 4, 2, 8, 2], [1, 5, 2, 2, 2, 5, 6, 3, 9, 3, 1, 7, 9, 6, 8, 6, 8, 3], [5, 7, 8, 3, 8, 8, 3, 9, 9, 8, 1, 9, 2, 5, 4, 7, 7, 7], [2, 3, 2, 4, 8, 5, 1, 7, 2, 9, 5, 2, 4, 2, 9, 2, 8, 7], [0, 1, 6, 1, 1, 0, 0, 6, 5, 4, 3, 4, 3, 7, 9, 6, 1, 9]]) ) // out of memory

console.log( minPathSum([[7, 1, 3, 5, 8, 9, 9, 2, 1, 9, 0, 8, 3, 1, 6, 6, 9, 5], [9, 5, 9, 4, 0, 4, 8, 8, 9, 5, 7, 3, 6, 6, 6, 9, 1, 6], [8, 2, 9, 1, 3, 1, 9, 7, 2, 5, 3, 1, 2, 4, 8, 2, 8, 8], [6, 7, 9, 8, 4, 8, 3, 0, 4, 0, 9, 6, 6, 0, 0, 5, 1, 4]]) ) // out of memory
