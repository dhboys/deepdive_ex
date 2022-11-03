test("없는 숫자 더하기", () => {
  const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
  const resultArray = [];
  for (let i = 0; i < 10; i++) {
    !numbers.find((num) => num === i) ? resultArray.push(i) : null;
  }

  return resultArray.reduce((acc, cur) => acc + cur, 0);
});

// 전체합에서 numbers의 합 빼는 방식
return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
