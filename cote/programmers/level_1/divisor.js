test("약수의 합", () => {
  const n = 12;
  let result = 0;
  for (var i = 1; i <= n; i++) {
    n % i === 0 ? (result += i) : null;
  }
  return result;
});
