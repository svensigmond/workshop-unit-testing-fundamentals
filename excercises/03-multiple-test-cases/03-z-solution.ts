import { describe, test, expect } from 'vitest';
import { add, subtract, multiply, divide } from './03-multiple-test-cases';

describe('Structuring tests', () => {
	describe('add', () => {
		const INPUT_VALUES = [
			{ x: 1, y: 2, expected: 3 },
			{ x: 4, y: 7, expected: 11 },
			{ x: 1300, y: 37, expected: 1337 },
		];

		test.each(INPUT_VALUES)(
			'should add $x and $y to get $expected',
			({ x, y, expected }) => {
				// Act
				const result = add(x, y);

				// Assert
				expect(result).toBe(expected);
			},
		);
	});

	describe('subtract', () => {
		const INPUT_VALUES = [
			{ x: 1, y: 2, expected: -1 },
			{ x: 4, y: 7, expected: -3 },
			{ x: 1300, y: 37, expected: 1263 },
		];

		test.each(INPUT_VALUES)(
			'should subtract $y from $x to get $expected',
			({ x, y, expected }) => {
				// Act
				const result = subtract(x, y);

				// Assert
				expect(result).toBe(expected);
			},
		);
	});

	describe('multiply', () => {
		const INPUT_VALUES = [
			{ x: 1, y: 2, expected: 2 },
			{ x: 4, y: 7, expected: 28 },
			{ x: 1300, y: 37, expected: 48100 },
		];

		test.each(INPUT_VALUES)(
			'should multiply $x with $y to get $expected',
			({ x, y, expected }) => {
				// Act
				const result = multiply(x, y);

				// Assert
				expect(result).toBe(expected);
			},
		);
	});

	describe('divide', () => {
		const INPUT_VALUES = [
			{ x: 1, y: 2, expected: 0.5 },
			{ x: 6, y: 3, expected: 2 },
			{ x: 1200, y: 40, expected: 30 },
		];

		test.each(INPUT_VALUES)(
			'should divide $x by $y to get $expected',
			({ x, y, expected }) => {
				// Act
				const result = divide(x, y);

				// Assert
				expect(result).toBe(expected);
			},
		);

		test('should handle division by zero', () => {
			// Arrange
			const x = 6;
			const y = 0;

			// Act & Assert
			expect(() => divide(x, y)).toThrowError();
		});
	});
});
