test("비밀지도", () => {
  const n = 5;
  const arr1 = [9, 20, 28, 18, 11];
  const arr2 = [30, 1, 21, 17, 28];

  const firstBinaryArr = arr1.map((v) => v.toString(2).padStart(5, "0"));
  const secondBinaryArr = arr2.map((v) => v.toString(2).padStart(5, "0"));

  const secretMapArr = [];
  for (let i = 0; i < firstBinaryArr.length; i++) {
    let str = "";
    for (let j = 0; j < firstBinaryArr[i].length; j++) {
      if (firstBinaryArr[i][j] === "0" && secondBinaryArr[i][j] === "0") {
        str += " ";
      } else {
        str += "#";
      }
    }
    secretMapArr.push(str);
  }
});
