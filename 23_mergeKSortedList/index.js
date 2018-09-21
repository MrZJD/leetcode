let {ListNode} = require('../ListNode')

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {

    if (lists.length === 0) {
        return [];
    }

    if (list.length === 1) {
        return lists[0];
    }

    // solutionA 遍历所有链表 推进数组 排序数组 构造新链表 返回

    let result = [];
    for (let i=0, listsLen=lists.length; i<listsLen; i++) {

        let curr = lists[i];
        while (curr) {
            result.push(curr);
            curr = curr.next;
        }

    }

    result = result.sort((a, b) => {
        return a.val - b.val;
    });

    for (let i=0, len=result.length; i<len; i++) {
        result[i].next = result[i+1];
    }

    return result[0];

    // solutionB walk

    // let listsLen = lists.length;

    // let currs = [];
    // for (let i=0; i<listsLen; i++) {
    //     currs.push(lists);
    // }

    // let
    // while (true) {
    //     for (let i=0; i<listsLen; i++) {
    //         currs.push(lists);
    //     }
    // }
};

let headA = new ListNode(1);
let headA2 = new ListNode(4);
let headA3 = new ListNode(5);

headA.next = headA2;
headA2.next = headA3;

let headB = new ListNode(1);
let headB2 = new ListNode(3);
let headB3 = new ListNode(4);

headB.next = headB2;
headB2.next = headB3;

let headC = new ListNode(2);
let headC2 = new ListNode(6);

headC.next = headC2;

let arr = [headA, headB, headC];

mergeKLists(arr).walk();
