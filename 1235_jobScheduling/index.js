/**
 * @description 工作规划
 * 
 * 有n份工作数据 -> 计算时间不重复的情况下的最高计划工资
 * 
 * @param {number[]} startTime 各工作的开始时间
 * @param {number[]} endTime 各工作的结束时间
 * @param {number[]} profit 各工作的报酬
 * @return {number}
 * 
 * @solution
 * 分析: -> 决定工资的因素: 1. 工作时长 2. 时薪
 * 
 * 思路:
 * 1. 找出所有可能的不重叠组合(多叉树) -> 计算各个组合的工时
 * 2. 线性规划计算面积
 * 
 * 优化:
 * 1. memorizor - 存储器
 * 2. recursion -> loop
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobNodes = []
    let joblen = startTime.length

    /* 构造job结点 */
    for (let i = 0; i < joblen; i++) {
        jobNodes.push(
            new TreeNode({ st: startTime[i], et: endTime[i], profit: profit[i] })
        )
    }

    /* 循环构造所有任务组合链表 */
    for (let i = 0; i < joblen; i++) {
        for (let j = 0; j < joblen; j++) {
            if (jobNodes[i].value.et <= jobNodes[j].value.st) {
                jobNodes[i].setNextNode(jobNodes[j])
            }
        }
    }

    let maxp = 0
    for (let i = 0; i < joblen; i++) {
        // console.log(jobNodes[i])
        // console.log(jobNodes[i].walkCalc())
        maxp = Math.max(jobNodes[i].walkCalc(), maxp)
    }

    return maxp
}

function TreeNode (value) {
    this.value = value
    this.next = []
    this.prev = null
    this.memo = null
}

TreeNode.prototype.setNextNode = function (treenode) {
    this.next.push(treenode)

    treenode.setPrevNode(this)
}

TreeNode.prototype.setPrevNode = function (treenode) {
    this.prev = treenode
}

// -> 结点walk计算器
TreeNode.prototype.walkCalc = function () {
    if (!this.value) return 0
    // 没有子节点
    if (this.next.length === 0) return this.value.profit
    // 计算过结点树
    if (this.memo !== null) return this.memo
    return this.memo = Math.max(...this.next.reduce((result, treenode) => {
        return result.concat(treenode.walkCalc())
    }, [])) + this.value.profit
}

module.exports = jobScheduling
