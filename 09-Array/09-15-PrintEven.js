//Array exercise https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/lecture/27562990#content
// 1. Print number: 1 -> 10
// 2. Print even number [2, 4, 6, 8, 10]
// 3. Print even numbers but less than n

function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printNumbers();
/////////////////////////////////////// 2.1 ///////////////////////////

function printEvenNumbers() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

printEvenNumbers();
/////////////////////////////////////// 2.2 ///////////////////////////

function printEvenNumbers() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

printEvenNumbers();
/////////////////////////////////////// 3 ////////////////////////////

function printEvenNumbersN(n) {
  if (n < 2) return;

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) console.log(i);
  }
}

printEvenNumbersN(15);
