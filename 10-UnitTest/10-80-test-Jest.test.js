// const sum = require('./test-Jest');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import { sum, multiply } from './10-80-test-Jest';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});
