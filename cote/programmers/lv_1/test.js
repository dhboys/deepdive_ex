test("인형 뽑기", () => {
    const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
    let splicedBoard = []
    const moves = [1,5,3,5,1,2,1,4]
    const resultBox = [];
    const countBox = []
    moves.map(v => { 
        countBox.push(v);
        for (var i = 1; i < board[v - 1].length; i++) {
            if (board[v - 1][board[v - 1].length - i] === 0) {
                board[v - 1].splice(-1, 1);
                continue;
            } else {
                console.log('board[v - 1]', board[v - 1]);
                resultBox.push(board[v - 1][board[v - 1].length - i]);
                return;
            } 
        }
    });
    console.log('resultBox', resultBox);
});