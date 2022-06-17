test("실패율 구하기", () => {
  // N = stage 수
  const N = 5;
  // 각 사용자들이 멈춰있는 stage
  const stages = [2, 1, 2, 6, 2, 4, 3, 3];

  let leftUserNum = stages.length;
  let failureRatioObj = {};
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
  for (let i = 1; i <= N; i++) {
    const stuckUserNum = stages.filter((v) => i === v).length;
    leftUserNum -= stuckUserNum;
    failureRatioObj[i] = failureRatio;
  }

  console.log("failureRatioArray", failureRatioArray);
  console.log("failureRatioObj", failureRatioObj);
});
