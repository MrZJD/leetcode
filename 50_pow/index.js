/**
 * @param {number} x -100.0 < x < 100.0
 * @param {number} n [−2^31, 2^31 − 1] int
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;

    var counter = Math.abs(n);
    var res = x;
    while (--counter) {
        res *= x;
    }

    if (n > 0) {
        return res;
    }
    if (n < 0) {
        return 1 / res;
    }
};

module.exports = myPow;
