test("약수의 개수와 덧셈", () => {
  const left = 13;
  const right = 17;
  const countDivisor = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      num % i === 0 ? count++ : null;
    }
    return count;
  };
  let sum = 0;
  for (let i = left; i <= right; i++) {
    countDivisor(i) % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
});

// 제곱근이 정수면 약수의 개수가 홀수다.
// 다른 사람의 풀이
// var answer = 0;
// for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         answer -= i;
//     } else {
//         answer += i;
//     }
// }
// return answer;
