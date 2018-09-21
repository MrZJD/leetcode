/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    let result = [];

    let nextCount = true; // 下一位 +1
    for (let i=digits.length-1; i>=0; i--) {
        if (nextCount) {
            if (digits[i] + 1 === 10) {
                result.unshift(0);
            } else {
                result.unshift(digits[i]+1);
                nextCount = false;
            }
        } else {
            result.unshift(digits[i]);
        }
    }

    if (nextCount) {
        result.unshift(1);
    }

    return result;
};

// let plusOne_failed = function(digits) { // -> 对于大数字不行
//     let result = +digits.join('') + 1;

//     result += '';

//     result = result.split('');

//     return result.map((value) => {
//         return +value;
//     });
// };

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9]));
console.log(plusOne([1, 9]));
console.log(plusOne([9, 9]));
console.log(plusOne([0]));
