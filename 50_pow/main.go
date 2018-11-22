package main

import "fmt"

// 二分指数
func myPow(x float64, n int) float64 {
	if n == 0 {
		return 1
	}

	if n == 1 {
		return x
	}

	if x == 1 {
		return 1
	}

	if x == -1 {
		if n%2 == 1 { // 基数
			return -1
		}

		// 偶数
		return 1
	}

	if n < 0 { // 负数幂转换
		x = 1 / x
		n = -n
	}

	if n%2 == 1 { // 基数幂
		return x * myPow(x, n-1)
	}

	// 偶数幂
	div := myPow(x, n/2)
	return div * div
}

func main() {

	fmt.Println("pow(2, 10)", myPow(2, 10))
	fmt.Println("pow(2, -2)", myPow(2, -2))

}
