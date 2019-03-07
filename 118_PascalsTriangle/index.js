/**
 * @param {number} numRows
 * @return {[[number]]}
 */
let generate = function(numRows) {
    let res = []
    let last = null
    for (let i = 1; i <= numRows; i++) {
        let arr = []
        for (let n = 0; n < i; n++) {
            if (n === 0 || (n === i - 1)) {
                arr.push(1)
            } else {
                arr.push(last[n-1] + last[n])
            }
        }
        last = arr
        res.push(arr)
    }
    return res
};

console.log( generate(7) )
