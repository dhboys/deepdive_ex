test("x만큼 간격이 있는 n개의 숫자", () => {
  let x = 2;
  const n = 5;
  let number = x;
  let answer = [number];
  for (var i = 0; i < n - 1; i++) {
    number += x;
    answer.push(number);
  }

  // 다른 사람의 풀이
  function solution(x, n) {
    return Array(n)
      .fill(x)
      .map((v, i) => (i + 1) * v);
  }
  solution(x, n);
});
