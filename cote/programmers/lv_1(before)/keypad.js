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

    let leftFinger = '*'
    let rightFinger = '#'

    let answer = [];

    // 거리 구하는 함수 만들기
    const getDistance = (locatedNum, targetNum) => {
    const keyPad = {
    7: [3, 0], 8: [3, 1], 9: [3, 2],
    4: [2, 0], 5: [2, 1], 6: [2, 2],
    1: [1, 0], 2: [1, 1], 3: [1, 2],
    '*': [0 ,0], 0: [0, 1], '#': [0, 2],
    }

    const nowPosition = keyPad[locatedNum];
    const targetPosition = keyPad[targetNum];

    return Math.abs(targetPosition[0] - nowPosition[0] + Math.abs(targetPosition[1] - nowPosition[1]));
    }

    numbers.map((v) => {
        if (v === 1 || v === 4 || v === 7) {
            answer.push('L');
            leftFinger = v;
        } else if (v === 9 || v === 6 || v === 3) {
            answer.push('R');
            rightFinger = v;
        } else if (v === 0 || v === 8 || v === 5 || v === 2) {
            const leftHandDistance = getDistance(leftFinger, v);
            const rightHandDistance = getDistance(rightFinger, v);

            if (leftHandDistance === rightHandDistance) {
                if (hand === 'right') {
                    answer.push('R');
                    rightFinger = v;
                    return;
                }

                if (hand === 'left') {
                    answer.push('L');
                    leftFinger = v;
                    return;
                }
            }

            if (leftHandDistance > rightHandDistance) {
                answer.push('R')
                rightFinger = v;
            }

            if (leftHandDistance < rightHandDistance) {
                answer.push('L')
                leftFinger = v;
            }
        }
        // console.log('leftFinger', leftFinger);
        // console.log('rightFinger', rightFinger);
    })

    // 문자열로 만들기
    answer.join("");
    console.log(answer);

    // 오답의 이유 -> 유클리드 거리 공식이 아닌 맨하튼 거리 공식을 사용하여야한다.
    // why? 손가락은 대각선이 아닌 상하좌우로만 움직일 수 있기 때문..
});