test("정수 내림차순으로 배치하기", () => {
  const n = 118372;
  const answer = (n + "")
    .split("")
    .map((num) => parseInt(num))
    .sort((a, b) => b - a)
    .map((num) => num + "")
    .reduce((acc, cur) => acc + cur, "");

  // reduce 대신 join 함수 활용할 것
});
