const {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
} = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('adds positive and negative numbers', () => {
      expect(add(10, -3)).toBe(7);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('subtracts negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('divides negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
    });
  });

  describe('power', () => {
    test('calculates power of positive numbers', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('calculates power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('calculates negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
    });
  });

  describe('squareRoot', () => {
    test('calculates square root of positive number', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('calculates square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('throws error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });
});