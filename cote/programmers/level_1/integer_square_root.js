test("정수 제곱근 판별", () => {
  const n = 121;
  const integerN = Math.sqrt(n);
  return Number.isInteger(integerN) ? Math.pow(integerN + 1, 2) : -1;
});
