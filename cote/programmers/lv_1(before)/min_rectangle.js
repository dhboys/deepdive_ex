test("최소 직사각형", () => {
  const sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ];
  // 한쪽에 큰 수 몰아 넣고 -> sort
  // 다른 한 쪽에 그 외에 수를 몰아 넣고
  // 각각 max 값 구해서 곱 -> Math.max()
  const sortedSizes = sizes.map((v) => v.sort((a, b) => a - b));
  let xMax = 0;
  let yMax = 0;
  xMax = Math.max(...sortedSizes.map((v) => v[0]));
  yMax = Math.max(...sortedSizes.map((v) => v[1]));
  const result = xMax * yMax;
  return result;
});
