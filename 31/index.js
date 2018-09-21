/**
 * @param {number[]} nums
 * @return {[]} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function(nums) {
    // 加权计算
    let originQ = 0;
    let minQ = Math.max(...nums) * nums.length; // 最大权
    let minQi = -1;

    let swapQi = -1;
    let swapAllQ = 0;
    for (let i=nums.length-1; i>=0; i--) {
        let Q = nums[i] * (nums.length - i);
        originQ += Q;
        swapAllQ += nums[i] * nums.length; // 计算最大权
        if (Q < minQ) {
            minQ = Q;
            minQi = i; // 记住最小的权值
        }
    }

    for (let i=nums.length-1; i>=0; i--) {
        if (i === minQi) {
            continue;
        }
        let Q = nums[i] * (nums.length - i);
        let tempAllQ = originQ - Q - minQ;
        tempAllQ += nums[minQi] * (nums.length - i) + nums[i] * (nums.length - minQi);
        // console.log('swap', [i, nums[i]], tempAllQ);
        if (tempAllQ < swapAllQ && tempAllQ > originQ) {
            swapAllQ = tempAllQ;
            swapQi = i; // 记录交换的下标
        }
    }

    if (swapQi !== -1) {
        let temp = nums[swapQi];
        nums[swapQi] = nums[minQi];
        nums[minQi] = temp;
    } else {
        nums = nums.sort((a, b) => {
            return a - b;
        });
    }

    return nums;
};

console.log(nextPermutation([1, 2, 3])); // [1, 3, 2]
console.log(nextPermutation([3, 2, 1])); // [1, 2, 3]
console.log(nextPermutation([1, 1, 5])); // [1, 5, 1]
console.log(nextPermutation([1, 3, 2])); // [2, 1, 3]
