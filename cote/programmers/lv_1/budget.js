test("예산", () => {
  const d = [1, 3, 2, 5, 4];
  const budget = 9;
  let usedBudget = 0;
  let usedBudgetArray = [];
  const sortedD = d
    .sort((a, b) => a - b)
    .map((cost) => {
      if (usedBudget + cost <= budget) {
        usedBudgetArray.push(cost);
        usedBudget += cost;
      }
    });

  // 다른 사람의 풀이
  // reduce 활용

  function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

    return d.length;
  }

  // ~ 문법 활용

  function solution(d, budget) {
    return ~(
      ~d
        .sort((a, b) => a - b)
        .map((v) => (budget -= v))
        .findIndex((v) => v < 0) || ~d.length
    );
  }
});
