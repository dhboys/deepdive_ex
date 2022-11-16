test("부족한 금액 계산하기", () => {
  const price = 3;
  const money = 20;
  const count = 4;

  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum - money > 0 ? sum - money : 0;
});

// 가우스 공식
//  const tmp = price * count * (count + 1) / 2 - money;
