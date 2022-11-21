test("직사각형 별찍기", () => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
});
