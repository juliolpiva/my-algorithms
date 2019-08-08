const getMaxBinaryGap = require('./solution');

test('Input: 0', () => {
    expect(getMaxBinaryGap(0)).toBe(0);
});

test('Input: 15', () => {
    expect(getMaxBinaryGap(15)).toBe(0);
});

test('Input: 32', () => {
  expect(getMaxBinaryGap(32)).toBe(0);
});

test('Input: 1041', () => {
    expect(getMaxBinaryGap(1041)).toBe(5);
});
