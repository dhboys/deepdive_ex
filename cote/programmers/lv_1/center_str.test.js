test("가운데 글자 가져오기", () => {
  // 홀수 값 구할 때 floor 함수 사용하기
  const s = "abde";
  let result = "";
  const strLength = s.length;
  if (strLength % 2 !== 0) {
    result = s.slice(strLength / 2, strLength / 2 + 1);
  } else {
    result = s.slice(strLength / 2 - 1, strLength / 2 + 1);
  }

  // console.log("result", result);
});
