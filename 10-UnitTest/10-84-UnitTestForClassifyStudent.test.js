// 10-84-UnitTestForClassifyStudent
import { classifyStudent } from './10-84-UnitTestForClassifyStudent';

describe('classifyStudent', () => {
  test('should return Invalid mark when pass n < 0', () => {
    const value = classifyStudent(-1);
    expect(value).toBe('Invalid mark');
  });

  test('should return Invalid mark when pass n > 0', () => {
    const value = classifyStudent(11);
    expect(value).toBe('Invalid mark');
  });

  test('should return Good job when pass n > 8', () => {
    const value1 = classifyStudent(9);
    expect(value1).toBe('Good job');

    const value2 = classifyStudent(10);
    expect(value2).toBe('Good job');
  });

  test('should return Well done when pass n in [7-8]', () => {
    expect(classifyStudent(7)).toBe('Well done');
    expect(classifyStudent(8)).toBe('Well done');
  });

  test('should return Not good when pass n in [4-7]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudent(n)).toBe('Not good');
    });
  });

  test('should return Bad when pass n in [1-4]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudent(n)).toBe('Bad');
    });
  });
});
