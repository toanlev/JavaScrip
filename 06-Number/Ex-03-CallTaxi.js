// Bài toán gọi taxi
// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và 
// trả về là số taxi cần gọi để chở hết số khách đó.
// Yêu cầu
// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
// Nếu số khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi.
// Ví dụ:
// getTaxiCount(3) --> 1 xe 4 chỗ
// getTaxiCount(6) --> 1 xe 7 chỗ
// getTaxiCount(10) --> 2 xe vì 1 xe 7 chỗ và 1 xe 4 chỗ
// getTaxiCount(20) --> 3 xe 7 chỗ
// Happy coding!
//https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5292476#overview


function getTaxiCount(passengersCount) {
  if (passengersCount <= 0) return 'Something when wrong'; //check the valid input

  if (passengersCount <= 7) return 1;
  if (passengersCount > 7) {
    if (passengersCount % 7 === 0) {
      return passengersCount / 7;
    }
    return Math.floor(passengersCount / 7) + 1;
  }
}
console.log(getTaxiCount(10));
console.log(getTaxiCount(15));
console.log(getTaxiCount(7));
console.log(getTaxiCount(11));
console.log(getTaxiCount(24));
console.log(getTaxiCount(26));
console.log(getTaxiCount(2));
