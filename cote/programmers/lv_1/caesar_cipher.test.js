test("시져의 암호", () => {
  const s = "a B z";
  const n = 4;
  let answer = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 32) {
      answer += " ";
    } else {
      if (65 <= s.charCodeAt(i) <= 90) {
        if (s.charCodeAt(i) + n > 90) {
          answer += String.fromCharCode(s.charCodeAt(i) + n - 65);
          console.log(
            "String.fromCharCode(s.charCodeAt(i) + n - 65)",
            String.fromCharCode(s.charCodeAt(i) + n - 65)
          );
        } else {
          answer += String.fromCharCode(s.charCodeAt(i) + n);
        }
      } else if (97 <= s.charCodeAt(i) <= 122) {
        if (s.charCodeAt(i) + n > 122) {
          answer += String.fromCharCode(s.charCodeAt(i) + n - 97);
        } else {
          answer += String.fromCharCode(s.charCodeAt(i) + n);
        }
      }
    }
  }
  console.log("answer", answer);
});
