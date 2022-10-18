test("자릿수 더하기", () => {
  const n = 123;
  const strN = n + "";
  let sum = 0;
  for (var i = 0; i < strN.length; i++) {
    sum += parseInt(strN[i]);
  }
  return sum;
});

// 다른 사람 풀이
return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
