import { describe, expect, test } from 'vitest';
import { getPizza } from './08-strict-equality';

/* 
	Commented to prevent test suite from failing before this exercise is started
	--------------------------------------------------------------------------
*/

// describe('Strict equality', () => {
// 	describe('getPizza', () => {
// 		test('should return the expected object for type "Margherita"', () => {
// 			const pizzaType = 'Margherita';

// 			// Act
// 			const result = getPizza(pizzaType);

// 			// Assert
// 			const expected = {
// 				name: 'Margherita',
// 				vegetarian: true,
// 				vegan: false,
// 				price: 12.5,
// 			};

// 			expect(result).toEqual(expected);
// 		});

// 		test('should return the expected object for type "Salami"', () => {
// 			const pizzaType = 'Salami';

// 			// Act
// 			const result = getPizza(pizzaType);

// 			// Assert
// 			const expected = {
// 				name: 'Salami',
// 				vegetarian: false,
// 				vegan: false,
// 				price: 15,
// 			};

// 			expect(result).toEqual(expected);
// 		});
// 	});
// });
