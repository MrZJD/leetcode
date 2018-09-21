/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
let numRescueBoats = function(people, limit) {
    let boats = [];

    people = people.sort((a, b) => {
        return a - b;
    });

    let endI = 0;
    for (let i=people.length-1; i>(endI-1); i--) {
        if (people[i] === limit) {
            boats.push([limit]);
            continue;
        }

        if (people[endI] + people[i] <= limit) {
            boats.push([people[endI], people[i]]);
            endI++;
        } else {
            boats.push([people[i]]);
        }
    }

    console.log(boats);

    return boats.length;
};

console.log(numRescueBoats([1, 2], 3)); // 1 [[1, 2]]
console.log(numRescueBoats([3, 2, 2, 1], 3)); // 3 [[1, 2], 2, 3]
console.log(numRescueBoats([3, 5, 3, 4], 5)); // 4 [[3], [3], [4], [5]]
