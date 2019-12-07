
/**
 * @class TestUtils
 * @static
 */

module.exports = {
    equal (fn, result) {
        let flag = fn
        if (typeof fn === 'function') {
            flag = flag()
        }
        if (flag !== result) {
            console.log('[testcase] fail')
            return false
        }
        console.log('[testcase] ok')
        return true
    }
}
