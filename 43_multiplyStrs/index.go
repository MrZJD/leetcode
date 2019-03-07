package main

// 字符串数字相乘 len(num1)<110 len(num2)<110
func multiply(num1 string, num2 string) string {
	mutiBase := num1
	mutiCounter := num2
	if len(num1) < len(num2) {
		mutiBase, mutiCounter = mutiCounter, mutiBase
	}

	result := "0"
	for i := 0; i < len(mutiCounter); i++ {
		weishu := getWS(mutiBase) // 进制的基数

		addOut := addStrsByTimes(weishu, mutiCounter[i]) // 进制的基数 循环次数

		result := addStrs(result, addOut)
	}

	return result
}
