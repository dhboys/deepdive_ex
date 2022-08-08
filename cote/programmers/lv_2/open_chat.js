test("오픈 채팅방", () => {
  const record = [
    "Enter uid1234 Prodo",
    "Enter uid4567 Muzi",
    "Change uid4567",
    "Enter uid7890 Apeach",
    "Leave uid4567",
    "Enter uid4567 Ryan",
    "Change uid4567 Prodo",
  ];
  let result = [];
  let userIdMap = new Map();

  const returnAction = (key) => {
    switch (key) {
      case "Enter":
        return "님이 들어왔습니다.";
        break;
      case "Leave":
        return "님이 나갔습니다.";
        break;
      case "Change":
        return "닉네임 변경";
        break;
      default:
        break;
    }
  };

  record.map((action) => {
    if (action.split(" ")[0] === "Enter") {
      userIdMap[action.split(" ")[1]] = action.split(" ")[2];
      result.push([action.split(" ")[1], "Enter"]);
    } else if (action.split(" ")[0] === "Leave") {
    //   userIdMap[action.split(" ")[1]] = action.split(" ")[2];
      result.push([action.split(" ")[1], "Leave"]);
    } else if (action.split(" ")[0] === "Change") {
      userIdMap[action.split(" ")[1]] = action.split(" ")[2];
      result.push([action.split(" ")[1], "Change"]);
    }
  });
  //   console.log("before result", result);

  result.map((action, idx) => {
    action[0] = userIdMap[action[0]];

    action[1] = returnAction(action[1]);

    return action;
  });
  //   console.log("after result", result);
  return result
    .filter((change) => change[1] !== "닉네임 변경")
    .map((action) => {
      return action[0] + action[1];
    });
});
