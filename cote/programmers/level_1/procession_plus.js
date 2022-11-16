test("행렬의 덧셈", () => {
  const arr1 = [
    [1, 2],
    [2, 3],
  ];
  const arr2 = [
    [3, 4],
    [5, 6],
  ];

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let innerArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      const number = arr1[i][j] + arr2[i][j];
      innerArr.push(number);
    }
    result.push(innerArr);
  }
  return result;
});

// map 함수 버젼
// A.map((a,i) => a.map((b, j) => b + B[i][j]));
