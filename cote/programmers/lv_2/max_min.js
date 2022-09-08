test("최댓값과 최솟값", () => {
  const s = "-1 -2 -3 -4";
  const arrangedS = s
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);

  const answer = arrangedS[0] + " " + arrangedS[arrangedS.length - 1];

  // 다른 사람의 풀이
  function solution(s) {
    const arr = s.split(" ");

    return Math.min(...arr) + " " + Math.max(...arr);
  }
});
