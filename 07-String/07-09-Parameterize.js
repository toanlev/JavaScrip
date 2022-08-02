//String exercise
//Write a JavaScrip function to parameterize a string
//Eg: Parameterize('Code JS Is Fun') -> 'code-js-is-fun'

function parameterize(str) {
  return str.toLowerCase().replaceAll(' ', '-');
}

console.log(parameterize('Code JS Is Fun'));
