test("문자열 내 마음대로 정렬하기", () => {
  const strings = ["sun", "bed", "car"];
  const n = 1;
  const wordMapList = strings.map((word) => [word[n], word]);
  wordMapList
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
    .map((v) => v[1]);
});
