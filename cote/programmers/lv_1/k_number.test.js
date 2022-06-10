test("k번째 수", () => {
  const array = [1, 5, 2, 6, 3, 7, 4];
  const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ];
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i][0] === commands[i][1]) {
      answer.push(array[commands[i][0] - 1]);
    } else {
      answer.push(
        array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
          commands[i][2] - 1
        ]
      );
    }
  }
  console.log("answer", answer);

  // 다른 풀이
  function solution(array, commands) {
    return commands.map((command) => {
      const [sPosition, ePosition, position] = command;
      const newArray = array
        .filter(
          (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
        )
        .sort((a, b) => a - b);

      return newArray[position - 1];
    });
  }
});
