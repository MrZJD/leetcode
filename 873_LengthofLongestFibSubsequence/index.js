/**
 * @param {[number]} A
 * @return {number}
 */
const lenLongestFibSubseq = function(A) { // Bruce Force
    let maxlen = 0;
    for (let i=0, len=A.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            // 两个数确定步长

            // 存在最短fib序列
            let countlen = 2;
            let countSeq = [A[i], A[j]];

            while (true) {
                let indices = A.indexOf(countSeq[countlen-2] + countSeq[countlen-1]);
                if (indices > -1) {
                    nextSi = indices;
                    countlen++;
                    countSeq.push(A[indices]);
                } else {
                    break;
                }
            }

            maxlen = Math.max(maxlen, countlen);
        }
    }
    if (maxlen === 2) return 0;
    return maxlen
};

console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]), 5); // [1,2,3,5,8]
console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]), 3); // [1,11,12], [3,11,14] or [7,11,18]
