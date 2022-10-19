test("하샤드 수", () => {
  const x = 10;
  let sum = 0;
  const hasshadSolution = (x + "").split("").map((num) => {
    sum += parseInt(num);
  });
  return x % sum === 0;
});
