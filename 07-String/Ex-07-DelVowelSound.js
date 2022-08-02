// https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291358#overview
// Remote all vowal character in input-string

function removeVowel(str) {
  let shortStr;
  if (str.includes('a')) {
    shortStr = str.replaceAll('a', '');
  }
  if (str.includes('u')) {
    shortStr = str.replaceAll('u', '');
  }
  if (str.includes('e')) {
    shortStr = str.replaceAll('e', '');
  }
  if (str.includes('o')) {
    shortStr = str.replaceAll('o', '');
  }
  if (str.includes('i')) {
    shortStr = str.replaceAll('i', '');
  }
  return shortStr;
}

console.log(removeVowel('heha'));
console.log(removeVowel('nena'));
console.log(removeVowel('memi'));
