function printMonth(n) {
  let month;

  switch (n) {
    case 1: {
      month = 'Jan';
      break;
    }
    case 2: {
      month = 'Feb';
      break;
    }
    case 3: {
      month = 'Mar';
      break;
    }
    // ...
    case 12: {
      month = 'Dec';
      break;
    }

    default: {
      month = 'Invalid Number';
    }
  }

  return month;
}

console.log(printMonth(3));
