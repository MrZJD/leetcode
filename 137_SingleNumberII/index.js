/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        let n = nums[i]
        if (nums.indexOf(n) === i && nums.indexOf(n, i + 1) === -1) {
            return n
        }
    }
    return 0
};

// 位运算解法
let singleNumber_bs = function (nums) { // eslint-disable-line
    let one = 0;
    let two = 0;
    for (let i = 0; i < nums.length; i++) {
        one = (one ^ nums[i]) & ~two;
        two = (two ^ nums[i]) & ~one;
    }
    return one;
}

console.log( singleNumber([2, 2, 3, 2]) ) // 3
console.log( singleNumber([0, 1, 0, 1, 0, 1, 99]) ) // 99
console.log( singleNumber([1, 0, 0, 0]) ) // 1
console.log( singleNumber([0, 0, 0, 4]) ) // 4
