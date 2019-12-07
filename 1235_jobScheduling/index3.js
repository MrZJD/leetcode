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
 * 
 * 搜索：深度/广度搜索 -> 递归
 */
var jobScheduling = function(startTime, endTime, profit) {
    function jobSchedulingWoker (i) {
        if (typeof memo[i] === 'undefined') {
            memo[i] = profit[i] + Math.max(
                ...startTime.map((st, si) => {
                    if (endTime[i] <= startTime[si]) return jobSchedulingWoker(si)
                    return 0
                })
            )
        }

        return memo[i]
    }

    let memo = []

    return Math.max(
        ...startTime.map((st, si) => jobSchedulingWoker(si))
    )
}

module.exports = jobScheduling
