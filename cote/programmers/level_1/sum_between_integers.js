test("평균 구하기", () => {
  const a = 3;
  const b = 5;
  const lower = a > b ? b : a;
  const higher = a > b ? a : b;
  let answer = 0;
  for (let i = lower; i <= higher; i++) {
    answer += i;
  }
  return answer;

  // 다른 사람의 풀이
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;

  // 다른 사람의 풀이2
  function adder(a, b, s = 0) {
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
  }
});
