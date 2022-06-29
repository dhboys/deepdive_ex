test("가운데 글자 가져오기", () => {
  // 홀수 값 구할 때 floor 함수 사용하기
  const s = "abcde";
  let result = "";
  const strLength = s.length;
  if (strLength % 2 !== 0) {
    return s[Math.floor(strLength / 2)];
  } else {
    return s.slice(strLength / 2 - 1, strLength / 2 + 1);
  }
});
