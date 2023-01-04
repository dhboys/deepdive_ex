test("이상한 문자 만들기", () => {
  const s = "  tRy hello  WORLD    ";

  const arrangeString = (str) => {
    const charArr = str.split("");
    return charArr
      .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join("");
  };

  const result = s
    .split(" ")
    .map((word) => arrangeString(word))
    .join(" ");
});

// join 함수에 대한 이해 필요
