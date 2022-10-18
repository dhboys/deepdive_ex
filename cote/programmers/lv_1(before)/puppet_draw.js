// map, reduce, transpose, pop 함수에 대해 공부하기..

test("인형 뽑기", () => {
    const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
    const moves = [1,5,3,5,1,2,1,4]

    const transpose = (matrix) => {
        console.log('matrix', matrix);
        matrix.reduce(
            (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
            []
        )};
    
    const solution = (board, moves) => {
        console.log('board', board);
        console.log('transpose', transpose);
        const stacks = transpose(board).map(row => {
            return row.reverse().filter(el => el !== 0)
        });
        const basket = [];
        let result = 0;
    
        for (const move of moves) {
            const pop = stacks[move - 1].pop();
            if (!pop) continue;
            if (pop === basket[basket.length - 1]) {
                basket.pop();
                result += 2;
                continue;
            }
            basket.push(pop);
        }
    
        return result;
    };
    console.log('solution', solution(board, moves));
});