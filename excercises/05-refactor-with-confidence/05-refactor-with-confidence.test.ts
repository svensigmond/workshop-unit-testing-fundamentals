import { describe, test, expect } from 'vitest';
import { processOrder, type Order } from './05-safe-refactoring'; // Replace './yourModule' with the actual path to your module

/* 
	Commented to prevent spoiling earlier exercises in test suite output
	--------------------------------------------------------------------------
*/

// describe('processOrder', () => {
// 	test('should calculate total without discounts for non-members', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 1,
// 			items: [
// 				{ name: 'Item 1', price: 100, quantity: 2 },
// 				{ name: 'Item 2', price: 50, quantity: 1 },
// 			],
// 			customer: { id: 1, name: 'John Doe', membershipLevel: 'none' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		expect(result).toBe(250);
// 	});

// 	test('should apply 5% discount for silver members', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 2,
// 			items: [
// 				{ name: 'Item 1', price: 100, quantity: 2 },
// 				{ name: 'Item 2', price: 50, quantity: 1 },
// 			],
// 			customer: { id: 2, name: 'Jane Doe', membershipLevel: 'silver' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		expect(result).toBe(237.5);
// 	});

// 	test('should apply 10% discount for gold members', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 3,
// 			items: [
// 				{ name: 'Item 1', price: 100, quantity: 2 },
// 				{ name: 'Item 2', price: 50, quantity: 1 },
// 			],
// 			customer: { id: 3, name: 'Jim Doe', membershipLevel: 'gold' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		expect(result).toBe(225);
// 	});

// 	test('should apply 15% discount for platinum members', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 4,
// 			items: [
// 				{ name: 'Item 1', price: 100, quantity: 2 },
// 				{ name: 'Item 2', price: 50, quantity: 1 },
// 			],
// 			customer: { id: 4, name: 'Jill Doe', membershipLevel: 'platinum' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		expect(result).toBe(212.5);
// 	});

// 	test('should apply an extra 10% discount for orders over 1000', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 5,
// 			items: [
// 				{ name: 'Item 1', price: 500, quantity: 3 },
// 				{ name: 'Item 2', price: 200, quantity: 2 },
// 			],
// 			customer: { id: 5, name: 'Jack Doe', membershipLevel: 'none' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		const expected = 1710;

// 		expect(result).toBe(expected);
// 	});

// test('should apply both membership discount and extra 10% discount for orders over 1000', () => {
// 		// Arrange
// 		const order: Order = {
// 			id: 6,
// 			items: [
// 				{ name: 'Item 1', price: 500, quantity: 3 },
// 				{ name: 'Item 2', price: 200, quantity: 2 },
// 			],
// 			customer: { id: 6, name: 'Jake Doe', membershipLevel: 'gold' },
// 		};

// 		// Act
// 		const result = processOrder(order);

// 		// Assert
// 		const expected = 1539;

// 		expect(result).toBe(expected);
// 	});
// });
