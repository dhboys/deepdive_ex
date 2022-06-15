test("포켓몬", () => {
  const nums = [3, 3, 3, 2, 2, 4];

  // 중복 제거 방법 5가지
  // 1. set
  const setResult = [...new Set(nums)];
  console.log("setResult", setResult);
  // 2. filter(), indexOf()
  const filterResult = nums.filter((v, i) => nums.indexOf(v) === i);
  console.log("filterResult", filterResult);
  // 3. reduce()
  const reduceResult = nums.reduce(
    (acc, cur) => (acc.includes(cur) ? [...acc] : [...acc, cur]),
    []
  );
  console.log("reduceResult", reduceResult);
  // 4. for 루프
  // 5. Object.fromEntries(), map(), Object.keys() -> 문자열로 변환됨
  const entriesResult = Object.keys(
    Object.fromEntries(nums.map((v) => [v, null]))
  );
  console.log("entriesResult", entriesResult);
});
