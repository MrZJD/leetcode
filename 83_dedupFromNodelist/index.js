var { ListNode } = require('../ListNode');

/**
 * @desc 需求是对排序好的链表去除冗余数据
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) { // 非排序好的链表也可以

    if (!head) {
        return head;
    }

    var book = [head.val];

    var prev = head;
    var curr = head.next;

    while (curr) {
        if (book.indexOf(curr.val) === -1) {
            book.push(curr.val);
            prev = curr;
        } else {
            prev.next = curr.next;
        }

        curr = curr.next;
    }

    return head;
};

var head = new ListNode(1);
var second = new ListNode(2);
var third = new ListNode(1);
var fourth = new ListNode(3);

head.next = second;
second.next = third;
third.next = fourth;

head.walk();

deleteDuplicates(head).walk();
