/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.forEach((num) => {
        let f = getNumFirstPlace(num)
    })
};

function getNumFirstPlace (num) {
    let target = num
    while (target / 10 >> 0) {
        target = target / 10
    }
    return target
}

/**
 * test case:
 * 
 * [10, 2] => 210
 * 
 * [3, 30, 34, 5, 9] => 9534330
 * */
