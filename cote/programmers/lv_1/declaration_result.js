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
});
