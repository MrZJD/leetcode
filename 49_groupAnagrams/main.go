package main

import "fmt"

type GroupMap struct {
	name   string
	chars  []rune
	result []string
}

func sortRuns(chars []rune) (sortedR []rune) {
	sortedR = chars[:len(chars)]

	fmt.Println("[before sorted]:", sortedR)

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

	fmt.Println("[after sorted]:", sortedR)

	return sortedR
}

func checkEqual(gmap *[]GroupMap, target string) bool {
	chars := []rune(target)
	chars = sortRuns(chars)

	if len(*gmap) == 0 {
		*gmap = append(*gmap, GroupMap{
			chars:  chars,
			result: []string{target},
		})
	} else {
		flag := false
		for i := 0; i < len(*gmap); i++ {
			gm := (*gmap)[i]
			if len(gm.chars) == len(chars) {
				eFlag := true
				for chI, ch := range gm.chars {
					if ch != chars[chI] {
						eFlag = false
						break
					}
				}

				if eFlag {
					// 相等
					(*gmap)[i].result = append(gm.result, target)
					flag = true
					break
				} else {
					// 不相等
					continue
				}
			} else {
				continue
			}
		}

		if flag == false {
			// 没有找到
			*gmap = append(*gmap, GroupMap{
				chars:  chars,
				result: []string{target},
			})
		}
	}

	return true
}

func groupAnagrams(strs []string) [][]string {
	var result [][]string

	var gmap []GroupMap

	for _, target := range strs {
		checkEqual(&gmap, target)
	}

	for _, res := range gmap {
		result = append(result, res.result)
	}

	fmt.Println("[Data]: ", result)

	return result
}

func main() {
	groupAnagrams([]string{"eat"})
	// groupAnagrams([]string{"eat"})
}
