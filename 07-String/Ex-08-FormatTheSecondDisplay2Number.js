// Format số giây luôn hiển thị 2 chữ số
// Viết hàm formatSeconds(seconds) nhận vào là số giây (0 <= seconds < 60) và trả về chuỗi luôn có 2 chữ số của số giây.
// Bài này áp dụng trong thực tế khi muốn show đồng hồ điện tử, để cho đẹp, mình đảm bảo luôn show 2 chữ số,
// dù số giờ phút giây chỉ có một chữ số.
// Ví dụ:
// formatSeconds(0) --> '00'
// formatSeconds(9) --> '09'
// formatSeconds(20) --> '20'
// Viết hàm theo 2 hướng tiếp cận khác nhau:
// formatSecondsV1(seconds) Sử dụng if...else
// formatSecondsV2(seconds) Sử dụng hàm slice()
// Happy coding!

///////////////////////////////////////////////////////////// using if...else///////////////////////////////////
function formatSecondsV1(seconds) {
  if (seconds < 10) return seconds.toString().padStart(2, '0');
  return seconds.toString();
}

console.log(formatSecondsV1(2));
console.log(formatSecondsV1(20));

/////////////////////////////////////////////////////////// using slice()///////////////////////////////
function formatSecondsV2(seconds) {
  let secondsFormat = ('0' + seconds).slice(-2);

  return secondsFormat;
}

console.log(formatSecondsV2(2));
console.log(formatSecondsV2(20));
