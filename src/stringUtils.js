/**
 * String utility functions
 */

function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if (!str || typeof str !== 'string') {
    return false;
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function countWords(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

module.exports = {
  capitalize,
  reverseString,
  isPalindrome,
  countWords,
};