//Create a function `truncate(text,maxlength)` that checks the length of the text and,
//if it exceeds maxlength - replaces the end of str with the ellipsis character `"..."`,
//to make its length qual to maxlength.

//Easy --> truncate('Easy Frontend', 4)--> 'Eas...'

//Horizontal ellipsis code is 8230.
//String.fromCodePoint(8230)
//UTF-16 '\u2026'
//https://www.compart.com/en/unicode/U+2026

// length
// length <= maxlength -->show full
// length > maxlength --> truncate

function truncate(text, maxlength) {
  if (text.length <= maxlength) return text;

  const shortStr = text.slice(0, maxlength - 1);
  return `${shortStr}\u2026`;
}

console.log(truncate('Easy frontend', 7));
