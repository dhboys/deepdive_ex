test("콜라츠 추측", () => {
  let num = 6;
  let answer = 0;
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
});
