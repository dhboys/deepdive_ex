test("성격 유형 검사하기", () => {
  const survey = ["TR", "RT", "TR"]
  const choices = [7, 1, 3]
  const types = ["RT", "CF", "JM", "AN"]
  let scoreObj = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0
  }
  let resultArray = []

  const calcScore = (type, choice) => {
    if(choice === 4) {
      return;
    } else if( choice < 4) {
      scoreObj[type.slice(0,1)] += (4 - choice);
    } else if (choice > 4) {
      scoreObj[type.slice(1,2)] += (choice - 4);
    }
    return;
  }

  for (var i = 0; i < survey.length; i++) {
    calcScore(survey[i], choices[i]);
  }
  
  
  types.map((type) => {
    if (scoreObj[type.slice(0,1)] > scoreObj[type.slice(1,2)]) {
      resultArray.push(type.slice(0,1))
    } else if (scoreObj[type.slice(0,1)] < scoreObj[type.slice(1,2)]) {
      resultArray.push(type.slice(1,2))
    } else if (scoreObj[type.slice(0,1)] === scoreObj[type.slice(1,2)]) {
      resultArray.push(type.slice(0,1))
    }
  })

  const result = resultArray.join('');

  console.log('result', result)

});
