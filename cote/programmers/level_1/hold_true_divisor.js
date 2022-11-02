test("나누어 떨어지는 숫자 배열", () => {
  const arr = [3, 2, 6];
  const divisor = 10;
  const result = arr.filter((num) => num % divisor === 0);
  const noArrayResult = [-1];
  return !!result.length ? result.sort((a, b) => a - b) : noArrayResult;
});
