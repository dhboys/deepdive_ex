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

  const reporterArray = report.map((v) => v.split(" ")[0]);
  console.log("reporterArray", reporterArray);
  const bad = report.map((v) => v.split(" ")[1]);
  console.log("bad", bad);

  for (let i = 0; i < id_list.length; i++) {
    bad.filter((v) => v === id_list[i]).length >= k;
  }
});
