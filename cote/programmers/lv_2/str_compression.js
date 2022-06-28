test("문자열 압축", () => {
  const s = "aabbaccc";
  for (let str of s) {
    console.log(str);
  }

  // 1부터 s의 길이만큼 반복된 숫자를 돌려본다.
  for (let i = 0; i < s.length; i++) {
    // 1개씩 잘라서 같은 숫자가 연달아 나오면 숫자를 + 시킨다.
    if (s[i] === s[i + 1]) {
      "2" + s[i];
    }
  }
});
