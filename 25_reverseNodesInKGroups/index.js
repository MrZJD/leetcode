
let {ListNode} = require('../ListNode');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let reverseKGroup = function(head, k) {
    if (k === 0 || k === 1) {
        return head;
    }

    let nodePools = [];

    let HEAD = PREV = {
        value: null,
        next: null,
    }; // k nodes tail
    let curr = head;
    while (curr) {
        nodePools = [];
        for (let i=0; i<k && curr; i++) {
            nodePools.push(curr);
            curr = curr.next;
        }

        if (nodePools.length === k) {
            for (let i=k; i>1; i--) {
                nodePools[i-2].next = null; // 注意循环引用
                nodePools[i-1].next = nodePools[i-2];
            }

            PREV.next = nodePools[k-1];

            PREV = nodePools[0];
        } else {
            PREV.next = nodePools[0];

            PREV = nodePools[nodePools.length-1];
        }
    }

    return HEAD.next;
};

// let reverseKGroup_better = function(head, k) {
//     let current = head
//     let prev = null
//     let count = k
//     for(let i=0;i<k;i++){ // walk k
//         if(!current){
//             return head
//         }
//         current = current.next
//     }
//     current = head
//     while(count>0){ // 记录了第一个 重新走一遍
//         let next = current.next
//         current.next = prev
//         prev = current
//         current = next
//         count--
//     }
//     head.next = reverseKGroup(current, k) // 递归
//     return prev
// };

let head = new ListNode(1);
let headA = new ListNode(2);
let headB = new ListNode(3);
let headC = new ListNode(4);
let headD = new ListNode(5);

head.next = headA;
headA.next = headB;
headB.next = headC;
headC.next = headD;

head.walk();
reverseKGroup(head, 3).walk();
