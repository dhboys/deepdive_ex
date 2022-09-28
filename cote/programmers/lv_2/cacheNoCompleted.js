test("카펫", () => {
  const cacheSize = 0;
  const cities = [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ];
  const cacheHit = 1;
  const cacheMiss = 5;
  let runTime = 0;
  let stackList = [];
  cities.map((city) => {
    const lowerCaseCity = city.toLowerCase();
    if (!stackList.includes(lowerCaseCity)) {
      stackList.unshift(lowerCaseCity);
      runTime += 5;
      if (cacheSize < stackList.length) {
        stackList.pop();
      }
    } else if (stackList.length < cacheSize) {
      stackList = stackList.filter((city) => city !== lowerCaseCity);
      stackList.push(lowerCaseCity);
      runTime++;
    } else {
      stackList = stackList.filter((city) => city !== lowerCaseCity);
      stackList.push(lowerCaseCity);
      runTime++;
    }
  });
  // console.log("runTime", runTime);
});
