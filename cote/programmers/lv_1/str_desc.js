test("문자열 내림차순", () => {
  const s = "sdfkjw";
  const strArray = Array.from(s).reverse();
  console.log(
    Array.from(s)
      .sort()
      .reverse()
      .reduce((acc, cur) => acc + cur, "")
  );

  // 다른 사람의 풀이
  function solution(s) {
    return s.split("").sort().reverse().join("");
  }
});
