test("음양 더하기", () => {
  const absolutes = [4, 7, 12];
  const signs = [true, false, true];
  let answer = 0;

  for (var i = 0; i < absolutes.length; i++) {
    signs[i] === true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
    console.log("answer", answer);
  }

  // 다른 사람 풀이
  function solution(absolutes, signs) {
    return absolutes.reduce(
      (acc, val, i) => acc + val * (signs[i] ? 1 : -1),
      0
    );
  }
});
