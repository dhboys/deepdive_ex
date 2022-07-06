test("문자열 다루기", () => {
  const s = "a234";
  let anwser = [];
  for (let char of s) {
    anwser.push((char *= 1 === /[0-9]/));
  }
  console.log(anwser);
  const solution =
    (anwser.length === 4 || anwser.length === 6) &&
    anwser.filter((v) => v !== 0).length === 0;
});

// 정규식과 지수 표현에 대해 공부 필요
