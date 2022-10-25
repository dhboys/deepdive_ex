test("x만큼 간격이 있는 n개의 숫자", () => {
  const x = 2;
  const n = 5;

  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  console.log(answer);

  // 다른 사람의 풀이
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
});
