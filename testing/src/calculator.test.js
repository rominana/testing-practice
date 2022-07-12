const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('add', () => {
  test('sum of two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(100, 1000)).toBe(1100);
    expect(calculator.add(-500, 250)).toBe(-250);
  });
});

describe('subtract', () => {
  test('subtraction between two numbers', () => {
    expect(calculator.subtract(11, 11)).toBe(0);
    expect(calculator.subtract(100, 50)).toBe(50);
    expect(calculator.subtract(1, 8800)).toBe(-8879);
  });
});

describe('divide', () => {
  test('division between two numbers', () => {
    expect(calculator.divide(50, 5)).toBe(10);
    expect(calculator.divide(33, 11)).toBe(3);
    expect(calculator.divide(330, 5)).toBe(66);
  });
});

describe('multiply', () => {
  test('multipling two numbers', () => {
    expect(calculator.multiply(0, 984379832740329479230)).toBe(0);
    expect(calculator.multiply(33, 100)).toBe(3300);
    expect(calculator.multiply(25, 5)).toBe(125);
    expect(calculator.multiply(-50, -2)).toBe(100);
  });
});