test("시져의 암호", () => {
  const s = "a B z";
  const n = 4;
  let answer = "";
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 32) {
      answer += " ";
    } else {
      console.log("s.charCodeAt(i)", s.charCodeAt(i));
      if (65 <= s.charCodeAt(i) && s.charCodeAt(i) <= 90) {
        if (s.charCodeAt(i) + n > 90) {
          answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
        } else {
          answer += String.fromCharCode(s.charCodeAt(i) + n);
        }
      } else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
        if (s.charCodeAt(i) + n > 122) {
          console.log(
            "String.fromCharCode(s.charCodeAt(i) + n - 97)",
            String.fromCharCode(s.charCodeAt(i) + n - 25)
          );
          answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
        } else {
          answer += String.fromCharCode(s.charCodeAt(i) + n);
        }
      }
    }
  }
  console.log("answer", answer);

  // 간결한 풀이
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var solution = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      solution += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    solution += textArr[index];
  }
});
