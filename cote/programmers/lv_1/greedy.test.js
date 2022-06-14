test("체육복", () => {
  const n = 5;
  const lost = [2, 4];
  const reserve = [3];
  let possibleCount = n - lost.length;
  let leftReserve = reserve;

  for (let i = 0; i < lost.length; i++) {
    const sharer = leftReserve.find(
      (v) => v === lost[i] + 1 || v === lost[i] - 1
    );

    if (sharer) {
      leftReserve = leftReserve.filter((v) => v !== sharer);
      console.log("leftReserve", leftReserve);
      possibleCount++;
    }
  }
  console.log("possibleCount", possibleCount);

  // 정답 코드
  return (
    n -
    lost.filter((a) => {
      // +- 1을 절대값을 사용해서 표시
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
});
