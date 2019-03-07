package main

import "fmt"

// ListNode 链表
type ListNode struct {
	Val  int
	Next *ListNode
}

func partition(head *ListNode, x int) *ListNode {
	var res = ListNode{Val: 0, Next: nil}
	var resCurr = &res
	var biger = ListNode{Val: 0, Next: nil}
	var bigerCurr = &biger
	var curr = head

	for curr != nil {
		var next = curr.Next

		curr.Next = nil

		if (*curr).Val < x {
			(*resCurr).Next = curr
			resCurr = resCurr.Next
		} else {
			(*bigerCurr).Next = curr
			bigerCurr = bigerCurr.Next
		}

		curr = next
	}

	resCurr.Next = biger.Next

	return res.Next
}

func logList(head *ListNode) {
	for head != nil {
		fmt.Printf("-> %v ", (*head).Val)
		head = head.Next
	}
	fmt.Println()
}

func main() {
	var n1 = &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 4,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 2,
					Next: &ListNode{
						Val: 5,
						Next: &ListNode{
							Val:  2,
							Next: nil,
						},
					},
				},
			},
		},
	}

	logList(n1)

	var n2 = partition(n1, 3)

	logList(n2)
}
