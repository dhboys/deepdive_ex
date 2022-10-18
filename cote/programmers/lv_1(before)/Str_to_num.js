test("숫자 변환", () => {
    let s = '1three5eight';
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (var i = 0; i < numbers.length; i++) {
        let arr = s.split(numbers[i]);
        s = arr.join(i);
    }
    console.log(s);
});
