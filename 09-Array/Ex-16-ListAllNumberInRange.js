// Liệt kê các số trong khoảng [a, b]
// Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm
// trong khoảng [a, b] (có bao gồm a và b)
// Với a, b là các số thoả điều kiện sau: -100 < a < b < 100
// Trả về là một array chứa các số trong khoảng từ a tới b.
// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291496#content

/////////////////////////////////////////////// using for...i/////////////////////////////
function createArrayInRangeV1(a, b) {
  if (a >= b || a < -100 || b > 100) return -1;

  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(createArrayInRangeV1(5, 7));

///////////////////////////////////////////// using Array.from()////////////////////////////////////
function createArrayInRangeV2(a, b) {
  if (a >= b || a < -100 || b > 100) return -1;

  return Array.from({ length: b - a + 1 }, () => a++);
}
console.log(createArrayInRangeV2(5, 10));
