/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
    let ans = [1]
    for ( let i = 1; i<= rowIndex; i++) {
        ans.push(0)
        for ( let j = i; j>=1; j--) {
            ans[j] = ans[j] + ans[j-1];
        }
    }
    return ans;
};
