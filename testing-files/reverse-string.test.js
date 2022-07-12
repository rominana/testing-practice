const reverseString = require('./reverse-string.js');

test('check reversedString', () => {
  expect(reverseString('aeiou'))
    .toBe('uoiea');
});
test('check reversedString', () => {
  expect(reverseString('54321'))
    .toBe('12345');
});
test('check reversedString', () => {
  expect(reverseString('romina'))
    .toBe('animor');
});
test('check reversedString', () => {
  expect(reverseString(''))
    .toBe('');
});
