test("기능 개발", () => {
    const progresses = [95, 90, 99, 99, 80, 99]
    const speeds = [1, 1, 1, 1, 1, 1]
    let finishDay = []

    for (let i = 0; i < progresses.length; i++) {
        let day= 0;
        while(progresses[i] < 100) {
            console.log('progresses[i]', progresses[i])
            progresses[i] += speeds[i]
            day++
        }
        finishDay.push(day);
    }
    console.log('finishDay', finishDay);

    let result = []
    let stack = 1
    
    for (let i = 0; i < finishDay.length; i++) {
        if (i+1 === finishDay.length) {
            result.push(stack);
        }
        if(finishDay[i] < finishDay[i+1]) {
            if (stack >= 2) {
                result.push(stack)
                stack = 1;
            } else {
                result.push(1);
            }
        } else {
            stack++
        }
    }
    console.log('result', result)

  });
  