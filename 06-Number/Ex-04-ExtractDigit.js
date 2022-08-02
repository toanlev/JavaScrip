// Tìm chữ số lớn nhất của một số nguyên dương
// Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số 
// nguyên dương n (0 <= n < 1000)
// Ví dụ:
// getMaxDigit(1) --> 1
// getMaxDigit(12) --> 2
// getMaxDigit(123) --> 3
// getMaxDigit(921) --> 9
// Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1
// Lưu ý: không sử dụng vòng lặp vì chưa học kiến thức này.
//https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291320#overview

function getMaxDigit(n) {
  //validate
  if (n < 0 || n >= 1000) return -1;


  //prossecing/

  //////////////////////when number is one digit/////////////////////
  if (n >= 0 && n < 10) return n;



  //////////////////////when number is two digit/////////////////////
  if (n >= 10 && n < 100) {
    ////////////////////extract/////////////////////////
    let dozens = Math.trunc(n / 10);
    let units = n % 10;
    ////////////////////compare/////////////////////////
    if (dozens > units) return dozens;
    return units;
  }



  //////////////////////when number is three digit/////////////////////
  if (n >= 100 && n < 1000) {
    ////////////////////extract/////////////////////////
    let hundreds = Math.trunc(n / 100);
    let dozens = Math.trunc((n % 100) / 10);
    let units = n % 10;
    ////////////////////compare/////////////////////////
    let LargestDigit = hundreds; // must use flag, not use return after each if
    if (dozens > LargestDigit) LargestDigit = dozens; //cause it break function when it jump into if
    if (units > LargestDigit) LargestDigit = units;
    return LargestDigit;
  }

  //return
}
console.log(getMaxDigit(157));
console.log(getMaxDigit(246));
console.log(getMaxDigit(991));
console.log(getMaxDigit(254));
console.log(getMaxDigit(1211));
console.log(getMaxDigit(253));
console.log(getMaxDigit(432));
console.log(getMaxDigit(234));
