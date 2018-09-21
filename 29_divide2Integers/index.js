/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var op;
    if ((dividend < 0 && divisor < 0) || 
        (dividend > 0 && divisor > 0)) {
        op = 1;
    } else {
        op = -1;
    }

    if (dividend < 0) dividend = -dividend;
    if (divisor < 0) divisor = -divisor;

    let res;
    if (divisor === 1 || divisor === -1) {
        res = dividend * op;
    } else {
        var target = divisor;
        var counter = 1;
        while (target * counter <= dividend) {
            counter++;
        }
        res = (counter-1) * op;
    }

    var max = Math.pow(2, 31) - 1;
    var min = -max - 1;
    if (res > max) {
        return max;
    } else if (res < min) {
        return min;
    } else {
        return res;
    }
};

var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 0 || (dividend === -2147483648 && divisor === -1)) return 2147483647;
    
    const sign = !(dividend < 0 ^ divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    let result = 0;
    while (dividend >= divisor) {
        let dvsMul = divisor;
        let multiple = 1;
        while (dividend >= dvsMul + dvsMul && dvsMul + dvsMul > 0) {
            dvsMul += dvsMul;
            multiple += multiple;
        }
        dividend -= dvsMul;
        result += multiple;
    }
    return sign ? result : -result;
};

// console.log( divide(-1, 1) );
console.log( divide(10, 3) );
console.log( divide(-2147483648, 1) );
// console.log( divide(-2147483648, -1) ); // 2147483647

