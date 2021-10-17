import { MathFunctions } from './mathFunctions';

describe('Math Functions', () => {
  const math = new MathFunctions();
  test('should return divisors [1,3,5,9,15,45] when input number is 45', () => {
    expect(math.getDivisorsFromNumber(45)).toEqual([1, 3, 5, 9, 15, 45]);
  });

  test('should return all primer numbers from divisors of 45', () => {
    const divisors : number[] = [1, 3, 5, 9, 15, 45];
    expect(math.getPrimerNumbersFromDivisors(divisors)).toEqual([1, 3, 5]);
  });
});
