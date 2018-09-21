/**
 * 常见递归
 * @param {number} n
 * @return {number}
 */
let climbStairs_dg = function(n) { // eslint-disable-line
    if (n === 1) {
        return 1; // 1
    }
    if (n === 2) {
        return 2; // 1+1 2
    }
    return climbStairs_dg(n-1) + climbStairs_dg(n-2);
};

let climbStairs = function() { // 加个计算池的递归
    let store = [0, 1, 2];
    return function(n) {
        if (!store[n]) {
            store[n] = climbStairs(n-1) + climbStairs(n-2);
        }
        return store[n];
    };
}();

console.log(climbStairs(3));// 111 12 21
console.log(climbStairs(4));// 1111 112 211 121 22

console.log(climbStairs(35));
console.log(climbStairs(36));
console.log(climbStairs(40));
