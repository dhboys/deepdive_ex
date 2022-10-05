test("예산", () => {
  const d = [1, 3, 2, 5, 4];
  const budget = 9;

  let arrangedD = d.sort((a, b) => a - b);
  let sum = 0;
  let result = 0;
  arrangedD.map((requestM) => {
    if (sum + requestM <= budget) {
      sum += requestM;
      result++;
    }
  });
  return result;
});

// 다른 사람의 풀이

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
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
