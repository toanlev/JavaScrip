// LIỆT KÊ ƯỚC SỐ CỦA SỐ NGUYÊN DƯƠNG N
// Viết hàm  getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và
// trả về một mảng các ước số của N
// Ví dụ :
//  * getDivisor(1) --> [1]
//  * getDivisor(10) --> [1, 2, 5, 10]
//  * getDivisor(12) --> [1, 2, 3, 4, 6, 12]
// Hãy viết hàm này bằng 3 cách tiếp cận:
//  1. Sử dụng for...i từ 1 tới n getDivisorV1(n)
//  2. Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorV2(n)
//  3. Sử dụng Array.from(), forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorV3(n)
// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291498#content

////////////////////////////////////////  for...i /////////////////////////////////////////////
function getDivisorV1(n) {
  if (n < 1 || n > 1000) return false;

  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr;
}
console.log(getDivisorV1(24));


///////////////////////////////////////////// Array.from() ////////////////////////////////////

function getDivisorV2(n) {
    if (n < 1 || n > 1000) return false;
  
    return arr = Array.from({length : n }, (_, index) => index + 1);
    arr.filter(() => {n % index === 0})

  }
  console.log(getDivisorV2(12));