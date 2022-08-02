// KIỂM TRA SỐ NGUYÊN TỐ
// Viết hàm isPrime(n) nhận vào là số nguyên dương (0 <= n < 1000) và trả về kết quả true/false
// cho biết đó có phải là số nguyên tố hay không ?
// * Trả về true nếu là số nguyên tố
// * Ngược lại, trả về false
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó
// Dãy số nguyên tố tham khảo: 2, 3, 5, 7, 11, 13, 17...
// * isPrime(2) --> true
// * isPrime(3) --> true
//  * isPrime(4) --> false vì 4 ngoài chia hết cho 1, nó còn chia hết cho 2
//  Giải bài bằng 2 cách:
//   1. Cách 1 là lặp từ 2 tới n-1 để kiểm tra isPrimeV1(n)
//   2. Cách 2 là lặp từ 2 tới căn bậc 2 của n để kiểm tra isPrimeV2(n)
// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291506#content

////////////////////////////////////////// lặp từ 2 tới n-1 ///////////////////////
function isPrimeV1(n) {
  if (n <= 0 || n > 1000) return false;

  if (n < 2) return false;
  if (n > 2) {
    for (let i = 2; i <= n - 1; i++) {
      if (n % i === 0) return false;
    }
  }
  return true;
}
console.log(isPrimeV1(5));

/////////////////////////////////////// lặp từ 2 tới căn bậc 2 của n /////////////////

function isPrimeV2(n) {
  if (n <= 0 || n > 1000) return false;

  if (n < 2) return false;
  if (n > 2) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      return n % i === 0;
    }
  }
  return true;
}
console.log(isPrimeV2(3));
