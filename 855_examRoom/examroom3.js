var LinkNode = function (val, prev, next) { /* 双向链表 */
    this.val = val
    this.prev = prev || null
    this.next = next || null

    if (this.next) {
        this.next.prev = this
    }
}

LinkNode.prototype.insert = function (val) {
    let insertNode = new LinkNode(val, this, this.next)

    if (this.next) {
        this.next.prev = insertNode
    }
    this.next = insertNode

    return insertNode
}

LinkNode.prototype.delete = function () {
    const next = this.next

    if (this.prev) {
        this.prev.next = this.next
    }
    if (this.next) {
        this.next.prev = this.prev
    }

    this.next = null
    this.prev = null

    return next
}

LinkNode.prototype.toString = function () {
    let next = this
    let log = []
    while (next) {
        log.push(next.val)
        next = next.next
    }

    return `[LinkNode]{ ${log.join(' -> ')} }`
}

/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.n = N
    this.seatsLen = 0
    this.seatsLink = null
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    // 无座
    if (this.seatsLen === this.n) {
        return null
    }

    // 第一个座 => 0
    if (this.seatsLen === 0) {
        this.seatsLen++
        this.seatsLink = new LinkNode(0, null, null)

        return 0
    }

    // 找到最大区间
    let currNode = this.seatsLink
    let maxRange = 0
    let maxRangeNode = currNode

    while (currNode) {
        let range = 0
        if (!currNode.next) { // 最后一个边界
            range = this.n - 1 - currNode.val
        } else {
            range = (currNode.next.val - currNode.val) / 2 >> 0 // 与后一个结点的中间距离
        }

        if (range > maxRange) {
            maxRange = range
            maxRangeNode = currNode
        }

        currNode = currNode.next
    }

    this.seatsLen++
    if (this.seatsLink.val !== 0 && this.seatsLink.val >= maxRange) { // 第一个边界
        this.seatsLink = new LinkNode(0, null, this.seatsLink)

        return 0
    }

    let midi = maxRangeNode.val + maxRange

    maxRangeNode.insert(midi)

    return midi
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    if (p === this.seatsLink.val) {
        this.seatsLink = this.seatsLink.delete()
        this.seatsLen--
        return null
    }

    let currNode = this.seatsLink

    while (currNode) {
        if (currNode.val === p) {
            currNode.delete()
            this.seatsLen--
            break
        }

        currNode = currNode.next
    }

    return null
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 * 
 * -> 进入考场(有一排座位) 选择一个位置(使其距离他最近的人的距离值最大)，如果有多个位置 坐在编号最小的地方
 * -> 考场没有人 -> 0号位置
 * 
 * input: ["ExamRoom","seat","seat","seat","seat","leave","seat"]
 *        [[10],[],[],[],[],[4],[]]
 * output: [null,0,9,4,2,null,5]
 * 
 * -> 链表解法
 */

var obj

// console.log([
//     obj = new ExamRoom(10),
//     obj.seat(),
//     obj.seat(),
//     obj.seat(),
//     obj.leave(0),
//     obj.leave(4),
//     // obj.seat()
// ])

console.log([
    obj = new ExamRoom(10),
    obj.seat(),
    obj.seat(),
    obj.leave(0),
    obj.leave(9),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.leave(0),
    obj.leave(5),
    obj.seat(),
    obj.seat(),
    obj.leave(7),
    obj.seat(),
    obj.leave(5),
    obj.seat(),
    obj.leave(7),
    obj.seat(),
    obj.leave(4),
    obj.seat(),
    obj.leave(8),
    obj.seat(),
    obj.leave(3),
    obj.seat(),
    obj.leave(1),
    obj.seat(),
    obj.leave(5),
    obj.seat(),
    obj.leave(4),
])
