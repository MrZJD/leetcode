/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {*} start
 * @param {*} end
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
let insert = function(intervals, newInterval) {
    let output = []
    let isInserted = false
    let inserted = newInterval

    for (let i=0, len=intervals.length; i<len; i++) {
        let item = intervals[i]

        if (inserted.end < item.start) { // 区间没有重叠 && 小于当前区间 -> 结束
            output.push(inserted)
            output = output.concat(intervals.slice(i))
            isInserted = true
            break
        }

        if (inserted.start > item.end) { // 区间没有重叠 && 大于当前区间 // 在中间值
            output.push(item)
            continue
        }

        // 有重叠区间
        inserted.start = Math.min(inserted.start, item.start)
        inserted.end = Math.max(inserted.end, item.end)
    }

    if (!isInserted) {
        output.push(inserted)
    }

    return output
}

console.log( insert([
    new Interval(1, 3),
    new Interval(6, 9),
], new Interval(2, 5)) ) // [[1, 5], [6, 9]]

console.log( insert([
    new Interval(1, 2),
    new Interval(3, 5),
    new Interval(6, 7),
    new Interval(8, 10),
    new Interval(12, 16),
], new Interval(4, 8)) ) // [[1,2],[3,10],[12,16]]

console.log( insert([], new Interval(5, 7)) ) // [[5, 7]]

console.log( insert([
    new Interval(1, 5),
], new Interval(2, 3)) ) // [[1, 5]]

console.log( insert([
    new Interval(0, 2),
    new Interval(3, 9),
], new Interval(6, 8)) ) // [[0, 2], [3, 9]]
