test("두 개 뽑아서 더하기", () => {
  const numbers = [2, 1, 3, 4, 1];
  let sumNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      sumNumbers.push(numbers[i] + numbers[j]);
    }
  }
  const result = [...new Set([...sumNumbers.sort((a, b) => a - b)])];
  console.log("result", result);
});
