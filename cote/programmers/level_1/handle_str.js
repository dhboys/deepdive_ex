test("문자열 다루기", () => {
  const s = "10e1";
  const isLength = s.length === 4 || s.length === 6;
  const isNum = !isNaN(Number(s));
  const isNotE = !s.split("").find((al) => al.toLowerCase() === "e");
  return isLength && isNum && isNotE;
});

// Number와 parseInt의 차이
// Number -> str + num 조합일 때 isNaN -> false 를 반환
// parseInt는 num만 따로 반환

// Number('10e1') === 100 으로 변환됨
// 알파벳 e가 붙은건 변환 시 조심
