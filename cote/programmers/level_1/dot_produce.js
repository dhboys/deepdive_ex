test("내적", () => {
  const a = [1, 2, 3, 4];
  const b = [-3, -1, 0, 2];

  return a.map((num, i) => num * b[i]).reduce((acc, cur) => acc + cur, 0);
});

// reduce만을 이용해서 간단하게
return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
