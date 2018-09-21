/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function(s) {
    let target = s.trim();
    if (target === '') {
        return false;
    }

    // // 1. 检测非法字符
    // // 列举合法字符
    // // 0x3a - 16
    // // 012 - 8
    // // 10e12 - 科学计数法
    // let invalid = [' ']; // 除数字字母以外的非法字符
    // for(let i=invalid.length-1; i>=0; i--) {
    //     if (!target.match(invalid[i])) {
    //         return false;
    //     }
    // }

    let n = Number(s);
    if (Number.isNaN(n)) {
        return false;
    } else {
        return true;
    }
};

console.log(isNumber('0')); // true
console.log(isNumber(' 0.1 ')); // true
console.log(isNumber('abc')); // false
console.log(isNumber('1 a')); // false
console.log(isNumber('2e10')); // true
