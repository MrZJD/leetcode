/**
 * @param {number} N
 */
var ExamRoom = function(N) {
    this.n = N
    this.hasSeated = 0
    this.seats = {} // 优化点1 -> map代替数组
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    // 无座
    if (this.hasSeated === this.n) {
        return null
    }

    // 第一个座
    if (this.hasSeated === 0) {
        this.seats[0] = 1
        this.hasSeated++
        return 0
    }

    // 最大距离座
    let st = 0
    let maxSt = 0
    let minMaxDis = 0

    // 优化点2: 不必循环所有座位，而是在最大区间座位中取值
    

    while (st < this.n) {
        // if (this.seats.indexOf(st) !== -1) {
        if (this.seats[st] === 1) {
            st++
            continue
        }

        // console.log('---->', st)
        
        // 距离其他位置的最小值
        // let distances = this.seats.map((otherSeats) => Math.abs(otherSeats - st))
        // let minDis = Math.min(...distances)

        // if (minDis > minMaxDis) {
        //     minMaxDis = minDis
        //     maxSt = st
        // }

        let minDis = this.n
        Object.keys(this.seats).forEach((otherSeats) => {
            if (this.seats[otherSeats] !== 1) return

            let distances = Math.abs((+otherSeats) - st)

            if (distances < minDis) {
                minDis = distances
            }
        })

        if (minDis > minMaxDis) {
            minMaxDis = minDis
            maxSt = st
        }

        // console.log('maxSt:', st, minDis)

        st++
    }

    this.seats[maxSt] = 1
    this.hasSeated++

    return maxSt
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    // this.seats = this.seats.filter(st => st !== p)
    // let i = this.seats.indexOf(p)
    // this.seats.splice(i, 1)

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
 */

var obj

console.log([
    obj = new ExamRoom(10),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.seat(),
    obj.leave(4),
    obj.seat()
])
