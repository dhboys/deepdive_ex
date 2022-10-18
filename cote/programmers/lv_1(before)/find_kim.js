test("서울에서 김서방 찾기", () => {
  const seoul = ["Jane", "Kim"];
  const answer = seoul
    .map((v, i) => {
      if (v === "Kim") return `김서방은 ${i}에 있다`;
    })
    .filter((m) => m !== undefined)[0];
  console.log("answer", answer);

  // 다른 사람의 풀이
  function findKim(seoul) {
    var idx = seoul.indexOf("Kim");
    return "김서방은 " + idx + "에 있다";
  }
});
