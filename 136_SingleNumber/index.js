/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let map = {}
    let singleNumber = null

    nums.forEach(val => {
        if (!map[val]) {
            map[val] = 1
        } else {
            map[val]++
        }
    })

    for (let k of Object.keys(map)) {
        if (map[k] === 1) {
            return k
        }
    }

    return singleNumber
};

// fc: nums.reduce((ans, num) => ans ^ num, 0); // -> 异或就可以了

console.log( singleNumber([2, 2, 1]) ) // 1
console.log( singleNumber([4, 1, 2, 1, 2]) ) // 4
