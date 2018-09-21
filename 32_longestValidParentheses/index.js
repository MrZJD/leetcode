/**
 * @param {string} s
 * @return {number}
 */
let longestValidParentheses = function(s) {
    // 使用传统堆栈
    let parentStack = [-1];
    let count = 0;

    for (let i=0, len=s.length; i<len; i++) {
        if (s[i] === '(') {
            parentStack.push(i);
        }

        if (s[i] === ')') {
            parentStack.pop();
            if (parentStack.length > 0) {
                count = Math.max(count, i - parentStack[parentStack.length-1]);
            } else {
                parentStack.push(i); // 记住不符合规则的括号下标
            }
        }
    }

    return count;
};

console.log(longestValidParentheses('(()')); // 2
console.log(longestValidParentheses(')()()(')); // 4
console.log(longestValidParentheses('()(()()')); // 4
