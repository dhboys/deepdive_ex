test("3진법 뒤집기", () => {
  const decimal = 45;
  let ternary = decimal.toString(3);
  let ternaryArray = [];
  for (let num of ternary) {
    ternaryArray.push(num);
  }

  let reverseTernary = ternaryArray
    .reverse()
    .reduce((acc, cur) => acc + cur, []);
  let resultDecimal = parseInt(reverseTernary, 3);

  //   * 알아둘 문법
  //   진법 변환
  //   10진법 -> n 진법: randomNum.toString(n)
  //   n 진법 -> 10 진법: parseInt(randomNum, n)

  // 다른 사람의 풀이
  const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
  };
});
