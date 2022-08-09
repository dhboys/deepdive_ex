test("멀쩡한 사각형", () => {
    const W = 8;
    const H = 12;
    const normalCnt = W * H;

    // 정사각형이면 한 변의 길이만큼 못 씀
    if (W === H) {
      const possibleCnt = normalCnt - W;
    } else {
      
    // 직사각형이면 작은 변의 길이 * 2 만큼 못 씀
      const small = W > H ? H : W
      const possibleCnt = normalCnt - (small * 2)
    }

  });
  