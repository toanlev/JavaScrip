//check if a string contains an email address with `@gmail.com` or not
//use three way below
//indexOf
//lastIndexOf
//includes

////////////////////////////////////////////////////////////////includes/////////////////////////////////////////////////

// function hasEmail(str) {
//   return str.includes('@gmail.com');
// }

////////////////////////////////////////////////////////////////lastIndexOf//////////////////////////////////////////////

// function hasEmail(str) {
//   const number = str.lastIndexOf('@gmail.com');
//   if (number >= 0) return true;
//   return false;
// }

////////////////////////////////////////////////////////////////indexOf//////////////////////////////////////////////////

function hasEmail(str) {
  const number = str.indexOf('@gmail.com');
  if (number >= 0) return true;
  return false;
}

console.log(hasEmail('toanlevan2@gmail.com'));
console.log(hasEmail('toanlevan2@Gmail.com'));
console.log(hasEmail('toanLevan2@gmail.com'));
console.log(hasEmail('tOanlevan2@gmail.com'));
