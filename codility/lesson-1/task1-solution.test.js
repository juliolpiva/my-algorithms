const getMaxBinaryGap = require('./task1-solution');

test('Input: string', () => {
    expect(getMaxBinaryGap('string')).toBe(0);
});

test('Input: 0', () => {
    expect(getMaxBinaryGap(0)).toBe(0);
});

test('Input: 1', () => {
    expect(getMaxBinaryGap(0)).toBe(0);
});

test('Input: 15', () => {
    expect(getMaxBinaryGap(15)).toBe(0);
});

test('Input: 32', () => {
  expect(getMaxBinaryGap(32)).toBe(0);
});

test('Input: 328', () => {
    expect(getMaxBinaryGap(328)).toBe(2);
});

test('Input: 1041', () => {
    expect(getMaxBinaryGap(1041)).toBe(5);
});

test('Input: 805306373', () => {
    expect(getMaxBinaryGap(805306373)).toBe(25);
});

test('Input: 1610612737', () => {
    expect(getMaxBinaryGap(1610612737)).toBe(28);
});