test("평균 구하기", () => {
  const arr = [1, 2, 3, 4];
  return arr.reduce((v, cur) => v + cur, 0) / arr.length;
});
