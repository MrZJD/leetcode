/**
 * @param {number[]} ratings
 * @return {number}
 */

let candy = function (ratings) {
    let candies = ratings.map(() => {
        return 1
    })

    let len = ratings.length
    for (let i = 0; i < len; i++) {
        let curr = ratings[i]
        let left = i === 0 ? ratings[i] : ratings[i - 1]
        let right = i === len - 1 ? ratings[i] : ratings[i + 1]

        let leftC = i === 0 ? 1 : candies[i - 1]
        let rightC = i === len - 1 ? 1 : candies[i + 1]

        if (curr > left && curr > right) {
            candies[i] = Math.max(leftC, rightC) + 1
        } else if (curr > left) {
            candies[i] = leftC + 1
        } else if (curr > right) {
            candies[i] = rightC + 1
        }
    }

    for (let i = ratings.length - 1; i >= 0; i--) {
        let curr = ratings[i]
        let left = i === 0 ? ratings[i] : ratings[i - 1]
        let right = i === len - 1 ? ratings[i] : ratings[i + 1]

        let leftC = i === 0 ? 1 : candies[i - 1]
        let rightC = i === len - 1 ? 1 : candies[i + 1]

        if (curr > left && curr > right) {
            candies[i] = Math.max(leftC, rightC) + 1
        } else if (curr > left) {
            candies[i] = leftC + 1
        } else if (curr > right) {
            candies[i] = rightC + 1
        }
    }

    // console.log(candies)
    return candies.reduce((p, c) => {
        return p + c
    }, 0)
}

console.log( candy([1, 0, 2]) ) // -> 5
console.log( candy([1, 2, 2]) ) // -> 4
console.log( candy([1, 2, 3, 4, 5, 6]) ) // 21
console.log( candy([6, 5, 4, 3, 2, 1]) ) // 21
console.log( candy([1, 3, 4, 5, 2]) ) // 11
console.log( candy([1, 2, 3, 1, 0]) ) // 9
console.log( candy([1, 2, 87, 87, 87, 2, 1]) ) // 13
console.log( candy([1, 6, 10, 8, 7, 3, 2]) ) // 18
