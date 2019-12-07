/**
 * id: 205
 * Isomorphic Strings
 * 同型字符串: 字符串的位置形态不变
 */

/**
 * isom strings
 * @param {string} s 
 * @param {string} t
 * @return {boolean} 
 */
var isIsomorphic = function (s, t) {
    function format (str) {
        var strFormatted = []
        var strMap = {} // i -> ind
        var identity = 0
        str.split('').forEach(ch => {
            if (typeof strMap[ch] === 'undefined') {
                strMap[ch] = identity
                strFormatted.push(identity)
                identity++
            } else {
                strFormatted.push(strMap[ch])
            }
        })

        return strFormatted.join('')
    }

    return format(s) === format(t)
}

// var isIsomorphic = function(s, t) {
//     for(let i = 0; i < s.length; i++){
//         const a = s.indexOf(s[i]);
//         const b = t.indexOf(t[i]);
//         if(a !== b){
//             return false;
//         }
//     }
//     return true;
// };

isIsomorphic('egg', 'add'); // true
isIsomorphic('foo', 'bar'); // false
isIsomorphic('paper', 'title'); // true
