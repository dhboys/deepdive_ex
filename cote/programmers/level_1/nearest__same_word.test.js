test("가장 가까운 같은 글자", () => {
  const s = "banana";
  let result = [];
  const array = s.split("");
  array.map((word, idx) => {
    for (let i = idx; i <= 0; i--) {
      while (i === 0) {
        if (array[i] === word) {
          result.push(idx - i);
          break;
        }
      }
    }
  });

  console.log("result", result);
});
