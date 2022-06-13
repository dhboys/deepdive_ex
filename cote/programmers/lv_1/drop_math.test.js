test("모의고사", () => {
  const answers = [1, 2, 3, 4, 5];
  const answer2 = [1, 3, 2, 4, 2];

  const first_student = [1, 2, 3, 4, 5];
  const second_student = [2, 1, 2, 3, 2, 4, 2, 5];
  const third_student = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 정답
  const first_student_count = answers.filter(
    (a, i) => a === first_student[i % first_student.length]
  ).length;
  const second_student_count = answers.filter(
    (a, i) => a === second_student[i % second_student.length]
  ).length;
  const third_student_count = answers.filter(
    (a, i) => a === third_student[i % third_student.length]
  ).length;
  const max = Math.max(
    first_student_count,
    second_student_count,
    third_student_count
  );
  console.log("max", max);
});
