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
 * 动态规划: dp[start[i]] = max(dp[start[i]],dp[end[i]] + profit[i])
 */
var jobScheduling = function(startTime, endTime, profit) {
    let tree = []
    let joblen = startTime.length
    /* 构造job结点 */
    for (let i = 0; i < joblen; i++) {
        tree.push({ st: startTime[i], et: endTime[i], profit: profit[i], memo: profit[i] })
    }

    tree = tree.sort((a, b) => {
        return a.et === b.et ? b.profit - a.profit : b.et - a.et
    })

    let max = 0
    for (let i = joblen - 1; i >= 0; i--) {
        for (let j = i + 1; j < joblen; j++) {
            if (tree[i].st >= tree[j].et) {
                tree[i].memo = Math.max(tree[i].memo, tree[i].profit + tree[j].memo)
                max = Math.max(max, tree[i].memo)
            }
        }
        
        max = Math.max(max, tree[i].memo)
    }
    return max
}

module.exports = jobScheduling
