package main

import (
	"fmt"
)

func merge(nums1 []int, m int, nums2 []int, n int) {
	si := 0
	sii := 0
	n1 := make([]int, m)
	copy(n1, nums1)

	for ind := range nums1 {

		if si < m && sii >= n {
			nums1[ind] = n1[si]
			si++
		} else if si >= m && sii < n {
			nums1[ind] = nums2[sii]
			sii++
		} else if n1[si] < nums2[sii] {
			nums1[ind] = n1[si]
			si++
		} else {
			nums1[ind] = nums2[sii]
			sii++
		}

		if ind >= (m+n) || (si >= m && sii >= n) {
			break
		}
	}
}

func main() {
	var nums1 = []int{1, 2, 2, 0, 0, 0}
	m := 3

	var nums2 = []int{2, 5, 6}
	n := 3

	merge(nums1, m, nums2, n)

	fmt.Printf("Output: %v\n", nums1)
}
