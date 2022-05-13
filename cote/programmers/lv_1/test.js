const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";
const hands2 = "left";
const hands3 = "right";

test("키패드 누르기", () => {
    const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
    const hand = "right";
    const left = [7, 4, 1];
    const right = [9, 6, 3];
    const middle = [0, 8, 5, 2];

    let leftFinger;
    let rightFinger;

    let answer = [];

    numbers.map((v) => {
        if (v === 7 || 4 || 1) {
            answer.push('L');
            leftFinger = v;
        }

        if (v === 9 || 6 || 3) {
            answer.push('R');
            rightFinger = v;
        }

        if (v === 0 || 8 || 5 || 2) {
            if (hand == 'left' && Math.abs(leftFinger - v) <= Math.abs(rightFinger - v)) {
                answer.push('L');
                leftFinger = v;
            } else {
                answer.push('R');
                rightFinger = v;
            }

            if (hand == 'right' && Math.abs(rightFinger - v) <= Math.abs(leftFinger - v)) {
                answer.push('R');
                rightFinger = v;
            } else {
                answer.push('L');
                leftFinger = v;
            }
        }
    })

    console.log(answer);
});