test("구명 보트", () => {
  const people = [70, 50, 80, 50, 90, 40];
  const limit = 240;
  let sortedPeople = people.sort((a, b) => a - b);
  let temp = 0;
  let result = 0;
  while (temp <= limit) {
    let count = 0;
    for (var i = 0; i < sortedPeople.length; i++) {
      temp += sortedPeople[i];
      count++;
      console.log("몇 번", i);
    }
    temp === 0;
    for (var j = 0; j < count; j++) {
      sortedPeople.shift();
    }
    result++;
    console.log("sortedPeople", sortedPeople);
  }

  console.log("result", result);
});
