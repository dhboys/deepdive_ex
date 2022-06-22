test("약수의 개수와 덧셈", () => {
  const left = 13;
  const right = 17;
  let result = 0;
  for (let i = left; i <= right; i++) {
    let divisorArray = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisorArray.push(i);
      }
    }
    if (divisorArray.length % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  console.log("result", result);

  // 다른 사람의 풀이
  // '제곱근이 정수면 약수의 갯수가 홀수이다' 를 이용
  function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        answer -= i;
      } else {
        answer += i;
      }
    }
    return answer;
  }
});
