test("문자열을 정수로 바꾸기", () => {
  const strToInt = (s) => {
    if (s[0] === "-") {
      return s
        .split("")
        .shift()
        .map((str, i) => parseInt(str) * Math.pow(10, s.length - (i + 1)))
        .reduce((arr, cur) => arr + cur, 0);
    } else {
      return s
        .split("")
        .map((str, i) => parseInt(str) * Math.pow(10, s.length - (i + 1)))
        .reduce((arr, cur) => arr + cur, 0);
    }
  };
  let s = "1234";
  console.log(s.split("").shift());
  console.log(s);
});
