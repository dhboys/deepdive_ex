test("나머지가 1이 되는 수 찾기", () => {
  const n = 10;
  for (let i = 0; i < n; i++) {
    while (n % i === 1) {
      return i;
    }
  }
});
