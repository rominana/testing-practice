const capitalize = require('./capitalize.js');

const strings = ['romina', 'testing', 'asdfghjk', '!', ' '];

describe.each(strings)('check if string is capitalized', (string) => {
  test('check if the first letter is capitalized', () => {
    expect(capitalize(string)[0]).toBe(string[0].toUpperCase());
  });
});