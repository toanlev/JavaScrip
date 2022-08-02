function findMaxEvent(a, b, c) {
  if (a % 2 === 0 && a > b && a > c) return a;
  if (b % 2 === 0 && b > c && b > a) return b;
  if (c % 2 === 0 && c > b && c > a) return c;
}

console.log(findMaxEvent(22, 81, 6));
