test("최대공약수와 최소공배수", () => {
  const n = 3;
  const m = 12;
  let result = [];
  let nDivisors = [];
  let mDivisors = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? nDivisors.push(i) : null;
  }
  for (let i = 1; i <= m; i++) {
    m % i === 0 ? mDivisors.push(i) : null;
  }
  const commonFactor = nDivisors.map((nDivisor) =>
    mDivisors.filter((mDivisor) => mDivisor === nDivisor)
  );
  const GCD = commonFactor.flat().pop();
  result.push(GCD);

  let LCM = 0;

  if (m < n) {
    n % m === 0 ? result.push(n) : result.push(n * GCD);
  } else {
    m % n === 0 ? result.push(m) : result.push(GCD * m);
  }
  console.log("result", result);
});

// 유클리드 호제법 or while 함수 이용해보기
