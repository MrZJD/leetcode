/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    const step = []

    if (nums.length === 1) {
        return 0
    }
    if (nums.length === 2) {
        return 1
    }

    let routeLen = nums.length - 1
    let currIndex = 0

    while (routeLen !== 0 && currIndex < nums.length) {
        let nowStep = nums[currIndex]

        if (nowStep >= routeLen) { // 0. 当前能直接到达最后
            step.push(routeLen)

            routeLen -= routeLen
            currIndex += routeLen
        } else { // 1. 当前这一步走不到最后
            // 是否有合适的值能走到最后
            let range = nums.slice(currIndex + 1, currIndex + 1 + nowStep)
            // 2. 查找范围内的能走的最大步数

            let maxStep = 1
            let maxCount = 1
            for (let si=0, slen=range.length; si<slen; si++) {
                let step = si + 1
                let move = step + range[si]
                if (move >= maxCount) {
                    maxStep = step
                    maxCount = move
                }
            }

            step.push(maxStep)

            routeLen -= maxStep

            currIndex = currIndex + maxStep
        }
    }
    // console.log(step)
    return step.length
};

console.log(jump([2, 3, 1, 1, 4])) // 2
console.log(jump([2, 3, 1, 1, 4, 1, 1, 1])) // 3
console.log(jump([2, 3, 1, 1, 1, 1])) // 3
console.log(jump([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0])) // 2
