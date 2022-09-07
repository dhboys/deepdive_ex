test("로또의 최고 순위와 최저 순위", () => {
  const lottos = [44, 1, 0, 0, 31, 25];
  const win_nums = [31, 10, 45, 1, 6, 19];
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const matchNumArray = lottos.filter((lottoNum) => {
    for (var i = 0; i < win_nums.length; i++) {
      if (lottoNum === win_nums[i]) {
        return lottoNum;
      }
    }
  });

  const bestBet =
    matchNumArray.length + lottos.filter((lottoNum) => lottoNum === 0).length;
  const worstBet = matchNumArray.length;

  let result = [rank[bestBet], rank[worstBet]];
  return result;

  // 다른 사람의 풀이
  // includes 함수 사용

  function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter((v) => win_nums.includes(v)).length;
    let zeroCount = lottos.filter((v) => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
  }
});
