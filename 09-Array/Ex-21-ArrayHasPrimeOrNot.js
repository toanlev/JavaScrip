// Kiểm tra mảng có chứa số nguyên tố không?
// Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.
// Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false.
// Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài tập trước đó.
// Viết bằng 5 cách khác nhau:
// Sử dụng for...i hasPrimeV1(numberList)
// Sử dụng forEach() hasPrimeV2(numberList)
// Sử dụng find() hasPrimeV3(numberList)
// Sử dụng findIndex() hasPrimeV4(numberList)
// Sử dụng some() hasPrimeV5(numberList)
// Happy coding!

//////////////////////////////////////// for i ////////////////////////////////
function hasPrime(numberList) {
  if (!Array.isArray(numberList)) return false;


  let number;
  for (let i = 0; i < numberList.length; i++) {
    number = numberList[i];
    console.log(number);

    if (number === 2) return true;
    if (number > 2) {
      for (let l = 2; l <= number - 1; l++) {
        if (number % l === 0);
      }
    }
    return true;
  }
}
console.log(hasPrime([5]));
