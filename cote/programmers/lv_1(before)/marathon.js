test("완주하지 못한 선수", () => {
  const participant = ["mislav", "stanko", "mislav", "ana"];
  const completion = ["stanko", "ana", "mislav"];

  // sort로 정렬
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
});
