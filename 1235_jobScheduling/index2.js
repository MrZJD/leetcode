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
 * 3. treenode -> map
 * 
 * 搜索：深度/广度搜索
 */
var jobScheduling = function(startTime, endTime, profit) {
    let joblen = startTime.length

    let linkMap = []

    /* 循环构造所有任务组合链表 */
    for (let i = 0; i < joblen; i++) {
        linkMap[i] = [] // 0 -> profit
        for (let j = 0; j < joblen; j++) {
            endTime[i] <= startTime[j] && linkMap[i].push(j)
        }
    }

    // console.log(linkMap)

    /* map计算 */
    let profitMap = []
    let max = 0
    for (let cn = 0; cn < joblen; cn++) {
        for (let i = 0; i < joblen; i++) {
            if (linkMap[i].length === 0) {
                profitMap[i] = profit[i]
                continue
            }
            if (linkMap[i].length === cn) {
                profitMap[i] = profit[i] + Math.max(...linkMap[i].map(node => profitMap[node]))
            }
        }
    }

    return Math.max(...profitMap)
}

module.exports = jobScheduling
