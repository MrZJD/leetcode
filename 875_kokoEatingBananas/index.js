/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
const minEatingSpeed = function(piles, H) {
    /**
     * @function
     * @param {number} k
     * @return {number} hours
     */
    function canEat(k) {
        let hours = 0;
        for (let i=0, len=piles.length; i<len; i++) {
            hours += Math.ceil(piles[i] / k);
        }
        return hours;
    }

    // 二分法
    let minK = 1;
    let maxK = Math.max(...piles);

    while (minK < maxK) {
        let mid = ((minK + maxK) / 2) >> 0;
        let spendH = canEat(mid);
        if (spendH <= H) {
            maxK = mid;
        } else {
            minK = mid + 1;
        }
    }

    return minK;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8), 4);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
// console.log(minEatingSpeed([332484035, 524908576, 855865114, 632922376, 222257295, 690155293, 112677673, 679580077, 337406589, 290818316, 877337160, 901728858, 679284947, 688210097, 692137887, 718203285, 629455728, 941802184], 823855818), 14);
