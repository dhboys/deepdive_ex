test("인형 뽑기", () => {
    const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
    const moves = [1,5,3,5,1,2,1,4]
    const resultBox = [];
    const countBox = []
    moves.map(v => { 
        countBox.push(v);
        const pickPosition = countBox.filter(t => v === t).length;
        console.log('board[v]', board[v]);
        // for (var i = 1; i < board[v].length + 1; i++) {
        //     if (board[( board[v].length + 1 ) - pickPosition - i] !== 0) {
        //         resultBox.push(board[( board[v].length + 1 ) - pickPosition]);
        //         board[( board[v].length + 1 ) - pickPosition - i] = 0;
        //         return;
        //     } else { 
        //         continue;
        //     }
        // }
    });
    console.log('resultBox', resultBox);
    return resultBox;
});