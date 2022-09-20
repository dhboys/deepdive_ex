test("올바른 괄호", () => {
  const s = ")()(";
  const leftbracket = "(";
  const rightbracket = ")";
  let count = 0;
  let result = true;
  // 가장 마지막 '(' 뒤에는 반드시 ')' 가 와야한다
  // '(' 의 개수와 ')' 의 개수는 같아야한다.
  for (var i = 0; i < s.length; i++) {
    if (count < 0) {
      return (result = false);
    } else {
      if (s[i] === leftbracket) {
        count++;
      } else {
        count--;
      }
    }
  }
  return result && count === 0 ? true : false;
});
