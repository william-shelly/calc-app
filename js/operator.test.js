const { test, expect } = require('@jest/globals');
const Operator = require('./operator.js');

test('can add 1 + 2?', () => {
    let calc = new Operator();
    expect(calc.addNumbers(1,2)).toBe(3);
});

test('can add null + null?', () => {
    let calc = new Operator();
    expect(calc.addNumbers(null,null)).toBe(0);
});

test('can add 2 - 1?', () => {
    let calc = new Operator();
    expect(calc.subtractNumbers(2,1)).toBe(1);
});

test('can add null - null?', () => {
    let calc = new Operator();
    expect(calc.subtractNumbers(null,null)).toBe(0);
});

test('can add 5 * 9?', () => {
    let calc = new Operator();
    expect(calc.multiplyNumbers(5,9)).toBe(45);
});

test('can add null * null?', () => {
    let calc = new Operator();
    expect(calc.multiplyNumbers(null,null)).toBe(0);
});

test('can add 33 / 3?', () => {
    let calc = new Operator();
    expect(calc.divideNumbers(33,3)).toBe(11);
});

test('can add null / null?', () => {
    let calc = new Operator();
    expect(calc.divideNumbers(null,null)).toBe(NaN);
});
