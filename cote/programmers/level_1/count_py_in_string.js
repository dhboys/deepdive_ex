test("문자열 내 p와 y의 개수", () => {
  const s = "pPoooyY";
  const lowerS = s.toLocaleLowerCase();
  let pCount = 0;
  let yCount = 0;

  lowerS.split("").map((str) => {
    str === "p" ? pCount++ : null;
    str === "y" ? yCount++ : null;
  });
  return pCount === yCount;
});

// 다른 사람의 풀이
// split을 통해 나온 배열의 길이는 p와 y의 길이 + 1이므로 비교하면 같다.
return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
