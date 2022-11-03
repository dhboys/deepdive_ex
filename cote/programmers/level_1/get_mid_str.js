test("가운데 글자 가져오기", () => {
  const s = "abcde";
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
});
