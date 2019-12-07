
const TestUtils = require('../TestUtils')
const checkStraightLine = require('./index')

TestUtils.equal(
    checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]),
    true
)

TestUtils.equal(
    checkStraightLine([[1,1],[2,3],[3,4],[4,5],[5,6],[6,7]]),
    false
)

TestUtils.equal(
    checkStraightLine([[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]),
    true
)
