import { test, expect } from 'vitest';
import { add, subtract, multiply, divide } from './01-arrange-act-assert'; // Replace './yourModule' with the actual path to your module

/* Rewrite these tests to use the Arrange-Act-Assert pattern (AAA) */

test('should add two numbers', () => {
	expect(add(1, 2)).toBe(3);
});

test('should subtract the second number from the first', () => {
	expect(subtract(2, 1)).toBe(1);
});

test('should multiply two numbers', () => {
	expect(multiply(2, 3)).toBe(6);
});

test('should divide the first number by the second', () => {
	expect(divide(6, 3)).toBe(2);
});

test('should handle division by zero', () => {
	expect(() => divide(6, 0)).toThrowError();
});
