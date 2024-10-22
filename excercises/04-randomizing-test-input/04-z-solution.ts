/*************************************************************************************/
/* 04-randomizing-test-input.ts
/*************************************************************************************/
export const add = (a: number, b: number) => {
	if (!a || !b) {
		throw new Error('Please supply 2 values to be added');
	}

	return a + b;
};

/*************************************************************************************/
/* 04-randomizing-test-input.test.ts
/*************************************************************************************/
import { describe, test, expect } from 'vitest';
import { add } from './04-randomizing-test-input';
import { faker } from '@faker-js/faker';

describe('randomizing test input', () => {
	describe('add', () => {
		test('should add two numbers', () => {
			// Arrange
			const a = faker.number.int();
			const b = faker.number.int();

			// Act
			const result = add(a, b);

			// Assert
			const expected = a + b;

			expect(result).toBe(expected);
		});
	});
});
