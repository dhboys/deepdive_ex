test("제일 작은 수 제거하기", () => {
  const arr = [4, 3, 2, 1];
  const resultArray = arr;
  const minNum = arr.sort((a, b) => a - b)[0];
  console.log("arr", arr);
  if (arr.length === 1) {
    resultArray = [-1];
    return resultArray;
  } else {
    return resultArray.filter((min) => min !== minNum);
  }
});
