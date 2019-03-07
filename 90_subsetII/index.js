// Solution:
// 1 -> 求子集 -> 转化为元素 求并集

/**
 * @param {[number]} nums
 * @return {[[number]]}
 */
let subsetsWithDup = function (nums) {
    let output = [[]]

    let numsMap = {}
    nums.forEach(val => {
        if (numsMap[val]) {
            numsMap[val]++
        } else {
            numsMap[val] = 1
        }
    }) // 转化为元素表

    for (let i = 1, len = nums.length; i <= len; i++) {
        // 从表中取出 i 个数
        output.push( ...draw(numsMap, i) )
    }

    return output
};

let draw = function (numsMap, n, si = 0) {
    let cloneMap = numsMap

    let output = []
    let keys = Object.keys(cloneMap)

    if (n === 1) {
        return keys.map(v => [+v]).filter((kv, ki) => {
            return ki >= si && cloneMap[kv] > 0
        })
    }

    for (let i = si, slen = keys.length; i < slen; i++) {
        let kn = keys[i]

        if (cloneMap[kn] <= 0) {
            continue
        }

        cloneMap[kn] -= 1 // re-pop

        let drawArr = draw(cloneMap, n - 1, i).map(arr => {
            arr.unshift(+kn)
            return arr
        })

        output.push( ...drawArr )

        cloneMap[kn] += 1 // re-push
    }

    return output
}

// console.log(draw({
//     1: 1,
//     2: 1,
//     3: 1,
// }, 1))
// console.log(draw({
//     1: 1,
//     2: 1,
//     3: 1,
// }, 2))
// console.log(draw({
//     1: 1,
//     2: 1,
//     3: 1,
// }, 3))


console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([1, 2, 3]))
console.log(subsetsWithDup([1, 1, 1, 1]))

// output:
// [
//     [2],
//     [1],
//     [1, 2, 2],
//     [2, 2],
//     [1, 2],
//     []
// ]
