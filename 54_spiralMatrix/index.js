/**
 * @param {[[number]]} matrix
 * @return {[number]}
 */
const spiralOrder = function(matrix) {
    const result = []

    if (matrix.length === 0) {
        return matrix
    }

    let top = 0
    let left = 0
    let right = matrix[0].length
    let bottom = matrix.length

    while (top < bottom && left < right) {
        for (let x=left, y=top; x<right; x++) {
            result.push(matrix[y][x]) // -> to right
        }
        top += 1

        for (let x=right-1, y=top; y<bottom; y++) {
            result.push(matrix[y][x]) // -> to bottom
        }
        right -= 1

        for (let x=right-1, y=bottom-1; x>=left && top !== bottom; x--) {
            result.push(matrix[y][x]) // -> to left
        }
        bottom -= 1

        for (let x=left, y=bottom-1; y>=top && left !== right; y--) {
            result.push(matrix[y][x]) // -> to tup
        }
        left += 1

        // console.log('POS: ', top, left, right, bottom)
    }

    return result
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
console.log(spiralOrder([]))
