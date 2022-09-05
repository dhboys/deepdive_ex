test("행렬의 덧셈", () => {
  const arr1 = [
    [1, 2],
    [2, 3],
  ];
  const arr2 = [
    [3, 4],
    [5, 6],
  ];
  let resultArray = [];

  for (var i = 0; i < arr1.length; i++) {
    let temArray = [];
    for (var j = 0; j < arr1[i].length; j++) {
      temArray.push(arr1[i][j] + arr2[i][j]);
    }
    resultArray.push(temArray);
  }
  return resultArray;

  // 다른 사람의 풀이
  function sumMatrix(A, B) {
    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
  }
});
