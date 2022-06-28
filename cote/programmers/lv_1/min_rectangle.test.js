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
  const sortedSizes = sizes.sort((a, b) => a - b);
  const xMax = 0;
  const yMax = 0;
});
