/**
 * @class ListNode
 * @description
 * @param {*} val
 */
function ListNode(val) {
    this.val = val;
    this.next = null;

    return this;
}

ListNode.prototype.walk = function() {
    let res = [this.val];
    let next = this.next;

    while (next) {
        res.push(next.val);
        next = next.next;
    }

    console.log(res.join(' -> '));
};

ListNode.prototype.each = function(fn) {
    let curr = this;
    while (curr) {
        fn(curr);
        curr = curr.next;
    }
};

let head = new ListNode(1);
let second = new ListNode(2);
head.next = second;

// head.walk();

exports.ListNode = ListNode;
