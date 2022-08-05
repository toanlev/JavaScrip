// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291358#overview
// Tìm và xoá các nguyên âm trong câu văn
// Viết hàm function removeVowel(str) để tìm và remove tất cả nguyên âm có trong câu văn đầu vào.
// Nguyên âm là các ký tự: u, e, o, a, i (uể oải :P)
// Ví dụ:
// removeVowel('') --> ''
// removeVowel('say hello') --> 'sy hll' vì a, e, o là nguyên âm nên đã bị xoá
// Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần.
// Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi, 
// thì hãy bỏ luôn các khoảng trắng thừa này nhé.
// Lưu ý: không được sử dụng for, chỉ được dùng hàm replace()


function removeVowel(str) {
  if (str === '') return '';
  return str
    .replace('u', '')
    .replace('e', '')
    .replace('a', '')
    .replace('o', '')
    .replace('i', '')
    .trim();  //bỏ các khoảng trắng thừa đầu và cuối
}

console.log(removeVowel('heha'));
console.log(removeVowel('say hello'));
console.log(removeVowel('mima meo meo hu hi iiii eee rrrr'));
console.log(removeVowel('mieueoi'));

// console.log('super 123 cool'.replaceAll(/[0-9, ]/gi, ''))
