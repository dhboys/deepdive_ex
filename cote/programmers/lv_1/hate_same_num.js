test("같은 숫자는 싫어", () => {
  const arr = [1, 1, 3, 3, 3, 0, 1, 1];

  // 효율성 테스트 실패
  // 배열의 원소를 제거하면 해당 원소의 뒤 원소부터 차례대로 앞으로 당기는 작업을 하므로..
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  // 효율성 테스트 통과
  // 배열 추가
  let resultArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      resultArray.push(arr[i]);
    }
  }

  // 간결하게 줄인 정답 코드
  function solution(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
  }
});
