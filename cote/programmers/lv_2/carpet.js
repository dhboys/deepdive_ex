test("카펫", () => {
  const brown = 18;
  const yellow = 6;
  // brown + yellow = 가로 x 세로
  const number = brown + yellow;
  let lengthArray = [];
  let length = 1;
  let count = 0;
  while (length <= number) {
    if (number % length == 0) {
      lengthArray.push(length);
    }
    length++;
  }
  let result = [];
  let width = lengthArray[Math.floor(lengthArray.length / 2)];
  let height =
    Math.ceil(lengthArray.length) % 2 !== 0
      ? lengthArray[Math.floor(lengthArray.length / 2)]
      : lengthArray[Math.floor(lengthArray.length / 2) - 1];

  for (var i = 0; i < lengthArray.length; i++) {
    if ((width - 2) * (height - 2) === yellow) {
      result.push(width);
      result.push(height);
      return result;
    } else {
      width = lengthArray[Math.floor(lengthArray.length / 2) + count];
      height =
        Math.ceil(lengthArray.length) % 2 !== 0
          ? lengthArray[Math.floor(lengthArray.length / 2) - count]
          : lengthArray[Math.floor(lengthArray.length / 2) - 1 - count];
    }
    count++;
  }
});
