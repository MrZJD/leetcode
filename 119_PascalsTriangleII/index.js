/**
 * @param {number} rowIndex
 * @return {[number]}
 */
let map = {}
let getRow = function(rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    if (rowIndex === 1) {
        return [1, 1]
    }
    if (map[rowIndex]) {
        return map[rowIndex]
    }

    let last = getRow(rowIndex - 1)
    let res = []
    for (let i = 0; i<=rowIndex; i++) {
        if (i === 0 || (i === rowIndex)) {
            res.push(1)
        } else {
            res.push(last[i-1] + last[i])
        }
    }

    map[rowIndex] = res
    return res
};

console.log( getRow(0) )
console.log( getRow(1) )
console.log( getRow(2) )
console.log( getRow(3) )
