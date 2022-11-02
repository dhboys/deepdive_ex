test("음양 더하기", () => {
  const absolutes = [4, 7, 12];
  const signs = [true, false, true];
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }
});

// reduce 활용 예시
return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
