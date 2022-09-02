test("Collatz 추측", () => {
  let num = 6;
  let count = 0;
  if (num === 1) {
    count = 0;
  }
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
      continue;
    } else {
      num = num * 3 + 1;
      count++;
      continue;
    }
  }
  if (count >= 500) {
    count = -1;
  }
  return count;

  // 다른 사람 풀이
  function collatz(num) {
    var answer = 0;
    while (num != 1 && answer != 500) {
      num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
      answer++;
    }
    return num == 1 ? answer : -1;
  }
});
