test("제일 작은 수 제거하기", () => {
  const arr = [4, 3, 2, 1];
  const minNum = Math.min(...arr);
  if (arr.length === 1) {
    const result = [-1];
    return result;
  } else {
    return arr.filter((num) => num !== minNum);
  }
});
