test("자연수 뒤집어 배열로 만들기", () => {
  const n = 12345;
  const strN = n.toString();
  let result = [];
  for (var i = strN.length - 1; i >= 0; i--) {
    result.push(parseInt(strN[i]));
  }
  return result;

  // 다른 사람의 풀이
  // 문자풀이
  return (n + "")
    .split("")
    .reverse()
    .map((v) => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
});
