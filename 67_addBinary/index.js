/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary_failed = function(a, b) { // 数字比较大时 gg
    let num1 = parseInt(a, 2)
    let num2 = parseInt(b, 2)

    return (num1 + num2).toString(2);
};

let addBinary = function (a, b) {
    let arr_a = a.split('');
    let arr_b = b.split('');

    let arr_a_lastIndex = arr_a.length - 1;
    let arr_b_lastIndex = arr_b.length - 1;

    let i = 0;
    let result = [];
    let nextCount = false;
    while (true) {
        if (arr_a_lastIndex - i < 0 && arr_b_lastIndex - i < 0 && !nextCount) {
            break;
        }

        let a = arr_a[arr_a_lastIndex - i] ? +arr_a[arr_a_lastIndex - i] : 0;
        let b = arr_b[arr_b_lastIndex - i] ? +arr_b[arr_b_lastIndex - i] : 0;

        if (nextCount) {
            if (a+b === 2) {
                result.unshift('1');
                nextCount = true;
            }

            if (a+b === 1) {
                result.unshift('0');
                nextCount = true;
            }

            if (a+b === 0) {
                result.unshift('1');
                nextCount = false;
            }
        } else {
            if (a+b === 2) {
                result.unshift('0');
                nextCount = true;
            }

            if (a+b === 1) {
                result.unshift('1');
                nextCount = false;
            }

            if (a+b === 0) {
                result.unshift('0');
                nextCount = false;
            }
        }

        ++i;
    }

    return result.join('');
}

console.log(addBinary('0', '0')) // '0'
console.log(addBinary('11', '1')) // '110'
console.log(addBinary('1010', '1011')) // '10101'
