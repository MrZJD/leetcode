/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    if (nums.indexOf(0) === -1 || nums.length === 1) {
        return true
    }

    function findAll (arr, target) { // eslint-disable-line
        let result = []
        for (let i=0, len=arr.length; i<len; i++) {
            if (arr[i] === target) {
                result.push(i)
            }
        }
        return result
    }

    let zeros = findAll(nums, 0)
    for (let i=0, len=zeros.length; i<len; i++) {
        let canSkipped = false
        for (let j=zeros[i]-1; j>=0; j--) {
            if (nums[j] > zeros[i]-j || (zeros[i] === nums.length-1 && nums[j] === zeros[i]-j)) {
                canSkipped = true
                break
            }
        }
        if (canSkipped) {
            continue
        } else {
            return false
        }
    }
    return true
};

// console.log(canJump([2, 3, 1, 1, 4])) // true
// console.log(canJump([3, 2, 1, 0, 4])) // false

// console.log(canJump([0])) // true
// console.log(canJump([2, 0])) // true
console.log(canJump([2, 0, 0])) // true
