test("핸드폰 번호 가리기", () => {
  const phone_number = "01033334444";
  const last_4_number = phone_number.slice(-4);
  let hide_phone_number = "";
  for (var i = 0; i < phone_number.length - 4; i++) {
    hide_phone_number += "*";
  }
  const result = hide_phone_number + last_4_number;
  console.log("result", result);

  // 심플 예제
  function hide_numbers(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요

    return result;
  }
});
