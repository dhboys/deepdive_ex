test("피보나치 수열", () => {
  // 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
  const n = 5;
  let numArray = [0, 1];
  for (var i = 2; i <= n; i++) {
    numArray[i] = (numArray[i - 1] % 1234567) + (numArray[i - 2] % 1234567);
  }
  console.log(numArray[n] % 1234567);

  // stackoverflow에 대한 이해 필요
  // 안정한 정수 계산을 보장하기 위해 아래의 식을 이용해야 한다.
  // ( A + B ) % C = (( A % C )+( B % C )) % C
});
