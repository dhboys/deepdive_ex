test("없는 숫자 더하기", () => {
    const numbers = [1,2,3,4,6,7,8,0];
    const solution = (numbers) => {
        const fullNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let answer = 0;
        for (var i = 0; i < 10; i++) {
            const temNum = numbers.filter((v) => v === i)[0];
            temNum !== undefined ? answer += temNum : null;
            // console.log('temNum', temNum);
            // console.log('answer', answer);
        }
        console.log('45- answer', 45 - answer);
    }
    console.log(solution(numbers));

    // 다른 사람 풀이
    function solution(numbers) {
        return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
    }
});