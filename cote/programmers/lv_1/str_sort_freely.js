test("문자열 내 마음대로 정렬하기", () => {
  const strings = ["sun", "bed", "car"];
  const n = 1;
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );

  // 내부 char가 같으면 전체 string을 비교, 내부 char 가 다르면 내부 char 비교
});
