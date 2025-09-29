const {
  capitalize,
  reverseString,
  isPalindrome,
  countWords,
} = require('./stringUtils');

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('capitalizes first letter of word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('handles already capitalized word', () => {
      expect(capitalize('WORLD')).toBe('World');
    });

    test('returns empty string for invalid input', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize(null)).toBe('');
    });
  });

  describe('reverseString', () => {
    test('reverses a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('reverses a palindrome', () => {
      expect(reverseString('racecar')).toBe('racecar');
    });

    test('handles empty string', () => {
      expect(reverseString('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    test('identifies simple palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('identifies palindrome with spaces', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('identifies non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('handles empty string', () => {
      expect(isPalindrome('')).toBe(false);
    });
  });

  describe('countWords', () => {
    test('counts words in simple sentence', () => {
      expect(countWords('Hello world')).toBe(2);
    });

    test('handles multiple spaces', () => {
      expect(countWords('Hello    world')).toBe(2);
    });

    test('handles empty string', () => {
      expect(countWords('')).toBe(0);
    });

    test('handles single word', () => {
      expect(countWords('Hello')).toBe(1);
    });
  });
});