test("최대공약수와 최소공배수", () => {
  const n = 3;
  const m = 12;
  let result = [];

  let bigger = m > n ? m : n;
  let smaller = m > n ? n : m;

  const getGCD = (num1, num2) => {
    let bigger = num1 > num2 ? num1 : num2;
    let smaller = num1 > num2 ? num2 : num1;
    let temp = 0;
    while (bigger % smaller) {
      temp = bigger % smaller;
      bigger = smaller;
      smaller = temp;
    }
    return smaller;
  };

  const getLCM = (GCD) => {
    return (n * m) / GCD;
  };

  result.push(getGCD(n, m), getLCM(getGCD(n, m)));
  return result;
});

// 유클리드 호제법 or while 함수 이용해보기
