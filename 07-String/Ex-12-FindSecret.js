// Truy tìm mật mã
// Viết hàm findSecret(code) để tìm ra chuỗi mật mã với quy tắc như sau.
// Bỏ đi các ký tự HOA trong code, chuỗi còn lại chính là mật mã cần tìm.
// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)
// Ví dụ:
// findSecret('SUPERCODE') --> ''
// findSecret('SUPERhelloCODE') --> 'hello'
// findSecret('eaABFHsyUEYSJfrontJSKJSHend') --> 'easyfrontend'
// Happy coding!
// Lưu ý: được phép dùng vòng for để duyệt chuỗi trong bài này.

function findSecret(code) {
  return code
    .split('')
    .filter((element) => element === element.toLowerCase())
    .join('');
}
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));
