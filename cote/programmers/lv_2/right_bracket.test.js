test("올바른 괄호", () => {
  const s = "()()";
  const firstBracket = "(";
  const lastBracket = ")";
  let count = 0;
  // 가장 마지막 '(' 뒤에는 반드시 ')' 가 와야한다
  // '(' 의 개수와 ')' 의 개수는 같아야한다.
  for (var i = 0; i < s.length; i++) {
    if (s[i] === firstBracket) {
      count++;
    } else {
      count--;
    }
  }
  console.log("개수", count);
});
