test("문자열 내림차순으로 배치하기", () => {
  const s = "Zbcdefg";
  return s.split("").sort().reverse().join("");
});
