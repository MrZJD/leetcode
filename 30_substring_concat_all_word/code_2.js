/**
 * @function
 * @param {*} s
 * @param {*} words
 * @param {*} l
 * @param {*} i
 * @param {*} length
 * @return {*}
 */
let helper = (s, words, l, i, length) => {
    if (i + length > s.length) {
        return false;
    }
    let map = new Map();
    for (word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    let sub = s.substring(i, i + length);
    for (let j = 0; j < length; j += l) {
        let chunk = sub.substring(j, j + l);
        if (map.has(chunk) && map.get(chunk) >= 1) {
            map.set(chunk, map.get(chunk) - 1);
        } else {
            return false;
        }
    }
    return true;
};

/**
 * @function
 * @param {*} s
 * @param {*} words
 * @return {[]}
 */
let findSubstring = function(s, words) {
    if (words.length === 0) {
        return [];
    }

    let length = words.length * words[0].length;
    let l = words[0].length;
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(i, i + l);
        if (words.indexOf(sub) !== -1 && helper(s, words, l, i, length)) {
            result.push(i);
        }
    }
    return result;
};

console.log(findSubstring('barfoo', ['foo', 'bar'])); // [0]
console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])); // [0, 9]
console.log(findSubstring('wordgoodstudentgoodword', ['word', 'student'])); // []
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])); // [6, 9, 12]
console.log(findSubstring('', [])); // []
console.log(findSubstring('', ['a'])); // []
console.log(findSubstring('ababaab', ['ab', 'ba', 'ba'])); // [1]
console.log(findSubstring('foobarfoobar', ['foo', 'bar'])); // [0, 3, 6]
