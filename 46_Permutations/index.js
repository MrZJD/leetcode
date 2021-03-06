/**
 * @function
 * @desc 计算排列
 * @param {[number]} nums
 * @return {[[number]]}
 */
let permute = function(nums) {
    /**
     * @function
     * @desc 插入元素
     * @param {num} target
     * @param {[num]} arr
     * @return {[[num]]}
     */
    function divide (target, arr) {
        let result = []
        for (let i=0, len=arr.length+1; i<len; i++) {
            result.push([
                ...arr.slice(0, i),
                target,
                ...arr.slice(i),
            ])
        }
        return result
    }

    if (nums.length <= 1) {
        return [nums]
    }

    let result = [[nums[0]]]
    nums.forEach((item, index) => {
        if (index === 0) return

        let output = []
        result.forEach(arr => {
            output = output.concat(divide(item, arr))
        })
        result = output
    })
    return result
}

console.log(permute([1, 2, 3]))
