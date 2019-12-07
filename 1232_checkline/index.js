/**
 * @description
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane.
 * 
 * @Constraints
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 * 
 * @param {number[][]} coordinates
 * @return {boolean}
 * 
 * @Solution : brutle force
 * 检查两个点之间的斜率
 */
var calcK = function(pa, pb) {
    let deltax = pb[0] - pa[0]

    if (deltax === 0) return 1

    let deltay = pb[1] - pa[1]

    return deltay / deltax
}

var checkStraightLine = function(coordinates) {
    let len = coordinates.length
    let k = calcK(coordinates[0], coordinates[1])
    let i = 2
    while (i < len) {
        if (k !== calcK(coordinates[i - 1], coordinates[i])) {
            return false
        }
        i++
    }
    return true
};

if (module) {
    module.exports = checkStraightLine
}