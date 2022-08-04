test("오픈 채팅방", () => {
    const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
    let result = []
    let userIdMap = new Map();

    const returnAction = (key) => {
        switch(key) {
            case 'Enter':
                return "님이 들어왔습니다."
                break;
            case 'Leave':
                return "님이 나갔습니다."
                break;
            default:
            break;
        }
    }

    record.map((action) => {
        if(action.split(' ')[0] === 'Enter') {
            userIdMap[action.split(' ')[1]] = action.split(' ')[2]
            result.push([action.split(' ')[1], 'Enter']);
        } else if (action.split(' ')[0] === 'Leave') {
            userIdMap[action.split(' ')[1]] = action.split(' ')[2]
            result.push([action.split(' ')[1], 'Leave']);
        } else if ((action.split(' ')[0] === 'Change')) {
            userIdMap[action.split(' ')[1]] = action.split(' ')[2]
            result.push([action.split(' ')[1], 'Change']);
        }
    })
    
    result.map((action, idx) => { 
        action[0] = userIdMap[action[0]]
        if (returnAction(action[1]) === undefined) {
            result.splice(idx, 1)
        } else {
            action[1] = returnAction(action[1])
        } 
        return action
    })
    return result.map((action) => { 
            return action[0] + action[1]
    })
  });
  