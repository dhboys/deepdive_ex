test("실패율 구하기", () => {
  // N = stage 수
  const N = 5;
  // 각 사용자들이 멈춰있는 stage
  const stages = [3, 3, 3, 3];

  let leftUserNum = stages.length;
  let failureRatioObj = {};
  // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
  for (let i = 1; i <= N + 1; i++) {
    const stuckUserNum = stages.filter((v) => i === v).length;
    // 분모가 0일 때 NaN이 되므로 조건문
    if (leftUserNum === 0) {
      failureRatioObj[i] = 0;
    } else {
      failureRatioObj[i] = stuckUserNum / leftUserNum;
      leftUserNum -= stuckUserNum;
    }
  }

  const valueArray = Object.values(failureRatioObj).sort((a, b) => b - a);
  let returnArray = [];

  for (let i = 0; i < valueArray.length; i++) {
    for (let j = 0; j < valueArray.length; j++) {
      if (valueArray[i] === failureRatioObj[j]) {
        returnArray.push(parseInt(j));
      }
    }
  }

  const setReturnArray = [...new Set(returnArray)];

  console.log("setReturnArray", setReturnArray);

  // 다른 사람의 풀이
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
});
