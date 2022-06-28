test("17장", () => {
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩
    // 2. this에 바인딩된 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
    // 3. 암묵적으로 this를 반환한다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환은 무시된다.
    // 이 때, 참조형 데이터를 반환하면 덮어씌워지고 아니면 무시된다.
    // example
    return "abc"; // return undefined
    // return {};
  }
  const circle1 = new Circle(5);
  console.log(circle1);
});
