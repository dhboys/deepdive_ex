test("수박수박수박수박수박수?", () => {
  const n = 3;

  const makeStr = (num) => {
    return num % 2 === 0 ? "수" : "박";
  };

  let resultStr = "";

  for (let i = 0; i < n; i++) {
    resultStr += makeStr(i);
  }
  console.log("resultStr", resultStr);
});
