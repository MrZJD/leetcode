
let subsetsWithDup = function (nums) {
    nums = nums.sort((a, b)=>a-b)
    let rtn = [[]]
    let nRtn = []

    for (let i = 0; i < nums.length; i++) {
        if (!(i>0 && nums[i]===nums[i-1])) {
            nRtn = []
            for (let j = 0; j < rtn .length; j++) {
                nRtn.push(rtn[j].concat(nums[i]))
            }
        } else {
            let nnRtn = []
            for (let j = 0; j < nRtn .length; j++) {
                nnRtn.push(nRtn[j].concat(nums[i]))
            }
            nRtn = nnRtn
        }
        rtn = rtn.concat(nRtn)
    }

    return rtn
}
