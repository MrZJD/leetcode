/**
 * @description 替换子串 得到 平衡字符串
 * 
 * 平衡字符串 len=n ['Q', 'W', 'E', 'R'] 四种字符串组成 并且 四个字符都恰好出现n/4次
 * 
 * 如果不是平衡字符串 查找可替换的最小字符串 使其成为 平衡字符串
 * 
 * @param {string} s
 * @return {number}
 * 
 * @solution
 */
var balancedString = function(s) {
    // 统计各子字符出现的次数
    let balanceN = s.length / 4
    let counter = [balanceN, balanceN, balanceN, balanceN]
    for (let i = 0, len = s.length; i < len; i++) {
        switch (s[i]) {
            case 'Q': counter[0]++; break;
            case 'W': counter[1]++; break;
            case 'E': counter[2]++; break;
            case 'R': counter[3]++; break;
        }
    }

    // 计算窗口宽度
    let w = 0
    for (let i = 0; i < 4; i++) {
        if (counter[i] > balanceN) {
            w += counter[i] - balanceN
        }
    }

    // 已平衡
    if (w === 0) return w

    // 
}
