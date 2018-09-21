/**
 * '*' any sequence
 * '?' any single character
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
    if (s === '' && p === '') {
        return true;
    }

    if (p === '*') {
        return true;
    }

    if (p.indexOf('*') === -1 && p.indexOf('?') === -1) {
        return s === p;
    }

    let sp = 0;
    for (let i=0, len=p.length; i<len; i++) {
        if (p[i] === '*') {
            let temp = s.slice(sp);

            if (!p[i+1]) {
                return true;
            }

            // 应该用递归解决

            let indices = temp.indexOf(p[i+1]);
            if (indices > -1) {
                sp += indices;
            } else {
                return false;
            }
        } else if (p[i] === '?' || p[i] === s[sp]) {
            sp++;
            continue;
        } else {
            return false;
        }
    }

    if (sp !== s.length) {
        return false;
    }

    return true;
};

// console.log(isMatch('', '')); // true
// console.log(isMatch('', '*')); // true
// console.log(isMatch('aa', 'a')); // false
// console.log(isMatch('aa', 'a*')); // false
// console.log(isMatch('aa', '*')); // true
// console.log(isMatch('cb', '?a')); // false
// console.log(isMatch('adceb', '*a*b')); // true
// console.log(isMatch('acabb', 'a*c?b')); // false
console.log(isMatch('abefcdgiescdfimde', 'ab*cd?i*de')); // true
