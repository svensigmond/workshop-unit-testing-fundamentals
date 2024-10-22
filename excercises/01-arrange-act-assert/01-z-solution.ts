import { test, expect } from 'vitest';
import { add, subtract, multiply, divide } from './01-arrange-act-assert'; // Replace './yourModule' with the actual path to your module

test('should add two numbers', () => {
	// Arrange
	const x = 1;
	const y = 2;

	// Act
	const result = add(x, y);

	// Assert
	expect(result).toBe(3);
});

test('should subtract the second number from the first', () => {
	// Arrange
	const x = 2;
	const y = 1;

	// Act
	const result = subtract(x, y);

	// Assert
	expect(result).toBe(1);
});

test('should multiply two numbers', () => {
	// Arrange
	const x = 2;
	const y = 3;

	// Act
	const result = multiply(x, y);

	// Assert
	expect(result).toBe(6);
});

test('should divide the first number by the second', () => {
	// Arrange
	const x = 6;
	const y = 3;

	// Act
	const result = divide(x, y);

	// Assert
	expect(result).toBe(2);
});

test('should handle division by zero', () => {
	// Arrange
	const x = 6;
	const y = 0;

	// Act & Assert
	expect(() => divide(x, y)).toThrowError();
});
