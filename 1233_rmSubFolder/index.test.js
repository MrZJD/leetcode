const TestUtils = require('../TestUtils')
const removeSubFolders = require('./index')

console.log(
    removeSubFolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]) // -> ['/a', '/c/d', '/c/f']
)

console.log(
    removeSubFolders(["/a","/a/b/c","/a/b/d"]) // -> ['/a']
)

console.log(
    removeSubFolders(["/a","/a/b/c/d/f"]) // -> ['/a']
)

TestUtils.equal(
    removeSubFolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
)

