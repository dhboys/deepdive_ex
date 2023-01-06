test("3진법 뒤집기", () => {
  const n = 45;

  const solution = (n) => {
    let arr = [];
    n.toString(3)
      .split("")
      .map((num) => arr.unshift(num));

    return parseInt(arr.join(""), 3);
  };

  const anotherSolution = (n) => {
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
  };
});

// 10진수 -> n진수: toString 사용
// n진수 -> 10진수: parseInt 사용

// reverse 함수 사용해보기
