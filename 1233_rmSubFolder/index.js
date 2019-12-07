/**
 * @description 删除文件夹列表中的所有子文件夹
 * 
 * 1 <= folder.length <= 4 * 10^4
 * 2 <= folder[i].length <= 100
 * folder[i] 只包含小写字母和 /
 * folder[i] 总是以字符 / 起始
 * 每个文件夹名都是唯一的
 * 
 * @param {string[]} folder
 * @return {string[]}
 * 
 * @solution brutle force
 * 所有目录 -> 获取父目录 -> (无效目录/父目录不存在)删除 ->
 */
var findFoldersRoot = function (target, folders) {
    let mt = target
    while (mt !== '') {
        mt = mt.slice(0, mt.lastIndexOf('/'))
        if (folders.indexOf(mt) !== -1) {
            return true
        }
    }
    return false
}

var removeSubfolders = function(folder) {
    folder = folder.sort((a, b) => a.length - b.length)

    let result = []
    for (let i = 0, len = folder.length; i < len; i++) {
        let target = folder[i]

        // 找不到父路径
        if (!findFoldersRoot(target, result)) {
            result.push(target)
        }
    }
    return result
}

module.exports = removeSubfolders
