test("크기가 작은 부분문자열", () => {
  const t = "500220839878"
  const p = "7"
  let arr = []

  const strLength = p.length
  for(let i = 0; i <= t.length - strLength; i++) {
    arr.push(t.slice(i,i + strLength))
  }
  const numberArr = arr.map((str) => parseInt(str))
  const result = numberArr.filter((num) => num <= parseInt(p)).length
  });
  