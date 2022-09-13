test("구명 보트", () => {
  const people = [70, 50, 80, 50];
  const limit = 100;
  let sortedPeople = people.sort((a, b) => a - b);
  let count = 0;

  for (var i = 0; i < sortedPeople.length; i++) {
    for (var j = 0; j < sortedPeople.length; j++) {
      if (sortedPeople[i] + sortedPeople[j] === 100) {
        sortedPeople[i] = 1000;
        sortedPeople[j] = 1000;
        count++;
        continue;
      } else if (sortedPeople[i] + sortedPeople[j] < 100) {
        sortedPeople[i] = 1000;
        sortedPeople[j] = 1000;
        count++;
        continue;
      } else {
        count++;
        continue;
      }
    }
  }
  console.log("sortedPeople", sortedPeople);
  console.log("count", count);
});
