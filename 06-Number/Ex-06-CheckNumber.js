// Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không?
// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true
// nếu n là số đối xứng, ngược lại trả về false.
// Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)
// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái.
// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...
// Lưu ý: không dùng chuỗi, không dùng mảng, chỉ xử lý bằng số thôi nhé.
// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5292446#overview
function isSymmetricNumber(n) {
  if (n < 0 || n > 999) return console.error;

  if (n < 10) return true;
  ///////////case 10 <= n < 100//////////////
  if (n >= 10 && n < 100) {
    //extrac digit//
    let dozens = Math.trunc(n / 10);
    let units = n % 10;
    //check 2 digit//
    return dozens === units;
  }
  ///////////case 10 <= n < 100//////////////
  if (n >= 100 && n < 1000) {
    //extrac digit//
    let hundreds = Math.trunc(n / 100);
    let units = n % 10;
    //check 2 digit//
    return hundreds === units;
  }
  return;
}

console.log(isSymmetricNumber(0));
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(23));
console.log(isSymmetricNumber(33));
console.log(isSymmetricNumber(344));
console.log(isSymmetricNumber(343));
