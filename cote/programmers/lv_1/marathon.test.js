test("완주하지 못한 선수", () => {
  const participant = ["leo", "kiki", "eden"];
  const completion = ["eden", "kiki"];
  let answer;
  participant.map((v) => {
    answer = completion.filter((c) => c === v);
  });
  console.log(answer);
});
