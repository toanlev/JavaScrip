// Write function to find max number in array https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/lecture/27562994#content
// for i
// for Each
// reduce

/////////////////////////////////////////// for i /////////////////////////////////
function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return undefined;

  //linh canh
  maxNumber = numberList[0];
  for (i = 1; i < numberList.length; i++) {
    if (maxNumber <= numberList[i]) {
      maxNumber = numberList[i];
    }
  }
  return maxNumber;
}
console.log(findMax([1, 3, 10, 2, 4, 5]));

///////////////////////////////////// for Each ////////////////////////////////////

function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return undefined;

  maxNumber = numberList[0];
  numberList.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
}
console.log(findMax([1, 3, 10, 2, 4, 5]));

//////////////////////////////////// reduce ///////////////////////////////////////

function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return undefined;

  return numberList.reduce((maxNumber, number) => {
    if (maxNumber > number) return maxNumber;
    return number;
  });
}
console.log(findMax([1, 3, 10, 2, 40, 5]));

/////////////////////////////////////reduce 3.2//////////////////////////////////
function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return undefined;

  return numberList.reduce((maxNumber, number) => {
    return maxNumber > number ? maxNumber : number;
  });
}
console.log(findMax([1, 3, 10, 2, 40, 5]));

/////////////////////////////////////reduce 3.3/////////////////////////////////

function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList === 0) return undefined;

  return numberList.reduce((maxNumber, number) => (maxNumber > number ? maxNumber : number));
}
console.log(findMax([1, 3, 10, 2, 40, 5]));
