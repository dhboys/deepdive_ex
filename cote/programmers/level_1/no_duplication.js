test("같은 숫자는 싫어", () => {
  const arr = [1, 1, 3, 3, 0, 1, 1];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== arr[i + 1] ? result.push(arr[i]) : null;
  }
  console.log("result", result);
});

// 마지막은 인덱스로 참조할 요소가 없어서, undefined가 뜨기 때문에 이 값이랑 비교
