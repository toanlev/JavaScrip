//Write function to transform a string:
//The first letter in UPPERCASE
//The rest in lowercase
//Eg: capitalize('easy FRontend') -> 'Easy frontend'

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str[0].toUpperCase();
  const restLetter = str.slice(1).toLowerCase();

  return `${firstLetter}${restLetter}`;
}
console.log(capitalize('hello World'));
console.log(capitalize('hello AudioWorkletd'));
console.log(capitalize('Hello World'));

//Bai nay k hieu sao chay khong duoc
