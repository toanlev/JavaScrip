// every v1
export function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
// console.log(checkIfAllEven([2, 1, 3]));
// console.log(checkIfAllEven([2, 4, 6]));
