/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.n = N
    this.hasSeated = 0
    this.seats = {}
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    // 无座
    if (this.hasSeated === this.n) {
        return null
    }

    // 第一个座 => 0
    if (this.hasSeated === 0) {
        this.hasSeated++
        this.seats[0] = 1
        return 0
    }

    // 第二个座 => this.seats.length - 1
    // if (this.hasSeated === 1) {
    //     this.hasSeated++
    //     this.seats[this.n - 1] = 1
    //     return this.n - 1
    // }

    // 找到最大区间
    let seats = Object.keys(this.seats)
    seats = seats.map(s => +s).sort((a, b) => a - b)

    if (seats[0] !== 0) {
        seats.unshift(0 - seats[0])
    }

    let last = seats[seats.length - 1]
    if (last !== this.n - 1) {
        seats.push((2 * this.n - 1) - last)
    }

    // console.log(seats)
    
    let maxRange = 0
    let midi = 0
    let ilen = seats.length
    for (let i = 1; i < ilen; i++) {
        // console.log('range:', seats[i - 1], seats[i])
        let range = seats[i] - seats[i - 1]
        if (range % 2 === 1) {
            range -= 1
        }
        if (range > maxRange) {
            maxRange = range
            midi = seats[i - 1] + (range / 2 >> 0)
        }
    }

    // console.log(midi)
    
    this.hasSeated++
    this.seats[midi] = 1

    return midi
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    delete this.seats[p]
    this.hasSeated--
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
 * -> 二分取值
 */

var obj

console.log([
    obj = new ExamRoom(10),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.leave(0),
    obj.leave(4),
    obj.seat(),
    obj.seat()
])
