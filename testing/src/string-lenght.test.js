// Task 1 -  stringLength that takes any string as an argument and returns its characters count.
const stringLength = require('./string-lenght.js');

const testStrings = ['', '12345', '1234567890', '12345678910'];

describe.each(testStrings)('Check string length', (string) => {
  test('check if the string meet the conditions', () => {
    expect(stringLength(string))
      .toBe(true);
  });
});