test("핸드폰 번호 가리기", () => {
  const phone_number = "01033334444";
  const answer = [];

  phone_number.split("").map((char, idx) => {
    phone_number.length - 4 > idx ? answer.push("*") : answer.push(char);
  });
  return answer.join("");
});

// repeat 함수
var result = "*".repeat(s.length - 4) + s.slice(-4);
