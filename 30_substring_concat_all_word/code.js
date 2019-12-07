/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
let findSubstring = function(s, words) {
    if (words.length === 0) {
        return [];
    }

    let w = {}; // 记录一个单词出现的次数
    let result = [];
    words.forEach(function(v) {
        w[v] = w[v] + 1 || 1;
    });

    for (let i = 0, len = s.length,
            count = words.length, wLen = words[0].length;
            i < len - count * wLen + 1;
            ++i) {
        let temp = {};
        let j = 0;
        for (; j < count; ++j) {
            let word = s.substr(i + j * wLen, wLen);
            if (w[word]) {
                temp[word] = temp[word] + 1 || 1;
                if (temp[word] > w[word]) {
                    break;
                }
            } else {
                break;
            }
        }
        if (j >= count) {
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
