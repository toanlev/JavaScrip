import { checkIfAllEven } from './10-85-UnitTestForCheckAllEven';

describe('checkIfAllEven', () => {
  test('should return false when not an array', () => {
    [3, 'string', true, false, NaN, undefined].forEach((element) => {
      expect(checkIfAllEven(element)).toBe(false);
      // expect(3).toBe(false);
      // expect('string').toBe(false);
      // expect(true).toBe(false);
      // expect(NaN).toBe(false);
      // expect(undefined).toBe(false);
    });
  });
  test('should return false when array is empty', () => {
    expect(checkIfAllEven([])).toBe(false);
  });
  test('should return false when array has no even number', () => {
    expect(checkIfAllEven([1, 5, 7, 9, 11])).toBe(false);
  });
  test('should return false when array has no even number', () => {
    expect(checkIfAllEven([1, 4, 3, 5, 8, 13])).toBe(false);
  });
  test('should return true when array has no even number', () => {
    expect(checkIfAllEven([2, 4, 6, 8, 12, 10])).toBe(true);
  });
});
