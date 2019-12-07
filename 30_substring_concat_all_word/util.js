/**
 * @function getSubStrInd
 * @desc 获取字符串中指定子串的下标
 * @param {string} str
 * @param {string} target
 * @return {[number]}
 */
function getSubStrInd(str, target) {
    let tlen = target.length;
    let result = [];
    for (let i=0, ilen=str.length-tlen+1; i<ilen; i++) {
        if (str.slice(i, i+tlen) === target) {
            result.push(i);
        }
    }
    return result;
}
/**
 * @function getComb
 * @desc 获取字符串数组的排列组合
 * @param {[string]} strarr
 * @return {[string]}
 */
function getComb(strarr) {
    // 1. 排列组合
    let origin = getRandomPos(new Array(strarr.length), strarr[0]);
    let i = 1;
    while (i < strarr.length) {
        let temp = [];
        for (let j=0, jlen=origin.length; j<jlen; j++) {
            // console.log(origin[j], strarr[i], '----->');
            temp.push(
                ...getRandomPos(origin[j], strarr[i])
            );
        }
        origin = temp;
        i++;
    }

    // 2. 去重
    let result = [];
    origin.forEach((item) => {
        let str = item.join('');
        if (result.indexOf(str) === -1) {
            result.push(str);
        }
    });

    return result;
}
/**
 * @function getRandomPos
 * @desc 排列
 * @param {[]} arr
 * @param {any} target
 * @return {[]}
 */
function getRandomPos(arr, target) {
    let i = 0;
    let unposCount = 0;
    let ilen = arr.length;
    while (i < ilen) {
        if (arr[i] === undefined) {
            unposCount++;
        }
        i++;
    }
    let j=0;
    let result = [];
    while (unposCount > 0 && j < arr.length) {
        while (arr[j] !== undefined) {
            j++;
        }
        let temp = arr.slice(0);
        temp[j] = target;
        result.push(temp);
        unposCount--;
        j++;
    }
    return result;
}
