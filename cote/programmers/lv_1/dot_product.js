test("내적 구하기", () => {
  const a = [1, 2, 3, 4];
  const b = [1, 0, -1];
  let answer = 0;
  for (var i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  console.log(answer);

  // reduce 사용 풀이
  a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
});
