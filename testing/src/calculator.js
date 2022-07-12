
// Task 3 - Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply. 
class Calculator {
    add(a, b) {
        return a + b;
    };

    subtract(a, b) {
        return a - b;
    };

    divide(a, b) {
        return Math.round(a / b * 100, -1) / 100;
    };

    multiply(a, b) {
        return a * b;
    };
}

module.exports = Calculator;