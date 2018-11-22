package leetcode

func mySqrt2(x int) int {
	for i := 0; i <= x; i++ {
		if i*i <= x && (i+1)*(i+1) > x {
			return i
		}

		continue
	}

	return 0
}

func mySqrt(x int) int {
	if x == 1 {
		return 1
	}

	left := 0
	right := x

	// 找值永远优先二分法
	for left < right {
		mid := (left + right) / 2

		if left*left <= x && (left+1)*(left+1) > x {
			return left
		}

		if mid*mid <= x {
			left = mid
		} else {
			right = mid
		}
	}

	return 0
}
