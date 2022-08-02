function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark';

  if (mark > 8) return 'Good job';
  if (mark >= 7) return 'Well done';
  if (mark >= 4) return 'Not good';

  return 'Bad';
}

console.log(classifyStudent(1));
console.log(classifyStudent(10));
console.log(classifyStudent(5));
