/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const N = 9;
    // 1. x
    for (let y=0; y<N; y++) {
        let checkBook = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let x=0; x<N; x++) {
            if (board[y][x] === '.') {
                continue;
            }
            if (checkBook[board[y][x]] === 0) {
                checkBook[board[y][x]] = 1;
            } else {
                return false;
            }
        }
    }
    console.log('Direction X has no repeat number');

    // 2. y
    for (let x=0; x<N; x++) {
        let checkBook = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let y=0; y<N; y++) {
            if (board[y][x] === '.') {
                continue;
            }
            if (checkBook[board[y][x]] === 0) {
                checkBook[board[y][x]] = 1;
            } else {
                return false;
            }
        }
    }

    console.log('Direction Y has no repeat number');

    // 3. block
    let xBlock = 3;
    let yBlock = 3;
    for (let x=0; x<xBlock; x++) {
        for (let y=0; y<yBlock; y++) {
            let checkBook = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let k=0; k<9; k++) {
                let ox = x*3 + (k/3 >> 0);
                let oy = y*3 + k%3;
                if (board[oy][ox] === '.') {
                    continue;
                }
                if (checkBook[board[oy][ox]] === 0) {
                    checkBook[board[oy][ox]] = 1;
                } else {
                    return false;
                }
            }
        }
    }

    console.log('Blocks has no repeat number');
    return true;
};

const sudoku = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(sudoku));
