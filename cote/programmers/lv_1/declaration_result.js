test("신고 결과 받기", () => {
  const id_list = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;

  let reporter = [];
  let result = [];
  const reporterArray = [...new Set(report)].map((v) => v.split(" "));
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < reporterArray.length; j++) {
      if (reporterArray.filter((v) => v[1] === id_list[i]).length >= k) {
        reporterArray[j][1] === id_list[i]
          ? reporter.push(reporterArray[j][0])
          : null;
      }
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    result.push(reporter.filter((v) => v === id_list[i]).length);
  }
  console.log("result", result);

  // map을 만들어 사용할 때 key, value를 지정하고 싶다면 new Map()으로 map을 만들고 set 함수를 사용한다.

  // 다른 사람의 풀이 참고
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
});
