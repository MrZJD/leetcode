package main

import (
	"fmt"
)

func sort(chars []int) (sortedR []int) {
	sortedR = chars[:len(chars)]

	startI := 0
	endI := len(sortedR) - 1

	for startI < endI {
		currI := startI
		for currI < endI {
			if sortedR[currI] > sortedR[currI+1] {
				swap := sortedR[currI]
				sortedR[currI] = sortedR[currI+1]
				sortedR[currI+1] = swap
			}
			currI++
		}
		endI--
	}

	return sortedR
}

func isQqual(a []int, b []int) bool {
	if len(a) != len(b) {
		return false
	}

	for i, v := range a {
		if v != b[i] {
			return false
		}
	}

	return true
}

// combinationSum_bruteForce 暴力破解
func combinationSum_bruteForce(candidates []int, target int) [][]int {
	var res [][]int

	for _, value := range candidates {
		if value > target {
			continue
		}

		if value == target {
			res = append(res, []int{value})
			continue
		}

		combSum := combinationSum(candidates, target-value)

		for _, subComb := range combSum {
			subComb = append(subComb, value)
			res = append(res, subComb)
		}
	}

	// dup
	var output [][]int
	for _, comb := range res {
		flag := true
		comb := sort(comb)
		for _, repeat := range output {
			if isQqual(comb, repeat) {
				flag = false
				break
			}
		}

		if flag {
			output = append(output, comb)
		}
	}

	return output
}

func backtracking(result *([][]int), ret []int, candidates []int, target int, pos int) {
	if target > 0 { // 继续相加
		for i := pos; i < len(candidates); i++ {
			ret = append(ret, candidates[i])
			backtracking(result, ret, candidates, target-candidates[i], i)
			// retw := ret
			// retw = retw[:len(retw)-1]
			ret = ret[:len(ret)-1]
		}
	} else if target == 0 { // 已得总数
		// ret 需要重新创建

		// 1. copy by range
		// oo := []int{}

		// for _, val := range ret {
		// 	oo = append(oo, val)
		// }

		// 2. copy by copy
		oo := make([]int, len(ret))
		copy(oo, ret)

		*result = append(*result, oo)
	}
}

// backtracking
func combinationSum(candidates []int, target int) [][]int {
	output := [][]int{}
	backtracking(&output, []int{}, candidates, target, 0)
	return output
}

func main() {
	fmt.Println(combinationSum([]int{2, 3, 6, 7}, 7))
}
