test("콜라츠 추측", () => {
  let num = 6;
  let count = 0;
  if (num === 1) {
    return 0;
  } else {
    do {
      if (num % 2 === 0) {
        num = num / 2;
        count++;
      } else {
        num = num * 3 + 1;
        count++;
      }
    } while (num !== 1);
    {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    }
    return count >= 500 ? -1 : count;
  }

  // 다른 사람의 풀이
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
});
