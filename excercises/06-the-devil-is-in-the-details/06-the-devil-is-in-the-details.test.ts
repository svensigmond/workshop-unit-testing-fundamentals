import { describe, expect, test } from 'vitest';
import {
	isDateBeforeJulyFirst,
	getStandingsSubSet,
} from './06-the-devil-is-in-the-details';
import { type Standings } from './06-types';

/* 
	Commented to prevent test suite from failing before this exercise is started
	--------------------------------------------------------------------------
*/
// describe('isDateBeforeJulyFirst', () => {
// 	const CURRENT_YEAR = new Date().getFullYear();

// 	describe('Dates before July 1st', () => {
// 		const TEST_CASES = [
// 			new Date(CURRENT_YEAR, 5, 30),
// 			new Date(2020, 5, 30),
// 			new Date(2000, 5, 30),
// 		];

// 		test.each(TEST_CASES)('Returns true for %s', (date) => {
// 			const result = isDateBeforeJulyFirst(date);
// 			expect(result).toBe(true);
// 		});
// 	});

// 	describe('Dates on July 1st', () => {
// 		const TEST_CASES = [
// 			new Date(CURRENT_YEAR, 6, 1),
// 			new Date(2020, 6, 1),
// 			new Date(2000, 6, 1),
// 		];

// 		test.each(TEST_CASES)('Returns false for %s', (date) => {
// 			// Act
// 			const result = isDateBeforeJulyFirst(date);

// 			// Assert
// 			const expected = false;

// 			expect(result).toBe(expected);
// 		});
// 	});

// 	describe('Dates after July 1st', () => {
// 		const TEST_CASES = [
// 			new Date(CURRENT_YEAR, 6, 2),
// 			new Date(2020, 6, 3),
// 			new Date(2000, 11, 1),
// 		];

// 		test.each(TEST_CASES)('Returns false for %s', (date) => {
// 			const result = isDateBeforeJulyFirst(date);
// 			expect(result).toBe(false);
// 		});
// 	});
// });

// describe('getStandingsSubSet', () => {
// 	const TYPE_REQUIRED_FIELDS = {
// 		rank: 0,
// 		points: 0,
// 		goalsFor: 0,
// 		goalsAgainst: 0,
// 		goalDifference: 0,
// 		matchesPlayed: 0,
// 	} as const;

// 	const BASE_STANDINGS: Standings = [
// 		{
// 			name: 'Feyenoord',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'Spart Rotterdam',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'FC Groningen',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'N.E.C.',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'Ajax',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'PSV',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'PEC Zwolle',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'SC Heerenveen',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'NAC Breda',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 		{
// 			name: 'Fortuna sittard',
// 			...TYPE_REQUIRED_FIELDS,
// 		},
// 	] as const;

// 	const getFeyenoordIndex = (standings: Standings): number =>
// 		standings.findIndex((obj) => obj.name.toLocaleLowerCase() === 'feyenoord');

// 	const moveFeyenoordToNewIndex = (newIndex: number): Standings => {
// 		const standings = [...BASE_STANDINGS];
// 		const index = getFeyenoordIndex(standings);
// 		const feyenoordObject = standings.splice(index, 1)[0];

// 		if (feyenoordObject) {
// 			standings.splice(newIndex, 0, feyenoordObject);
// 		}

// 		return standings;
// 	};

// 	describe('subSet sizes', () => {
// 		describe('when limit is not given', () => {
// 			test(`should return a subset of the default size`, () => {
// 				// Act
// 				const result = getStandingsSubSet(BASE_STANDINGS);

// 				// Assert
// 				expect(result).toHaveLength(7);
// 			});
// 		});

// 		describe('when limit is given', () => {
// 			[1, 2, 5, 8, 10].forEach((limit) => {
// 				test(`should return a subset that is equal to the limit of ${limit}`, () => {
// 					// Act
// 					const result = getStandingsSubSet(BASE_STANDINGS, limit);

// 					// Assert
// 					expect(result).toHaveLength(limit);
// 				});
// 			});
// 		});

// 		test(`should return the given rankings as a full set if "feyenoord" can't be found`, () => {
// 			// Arrange
// 			const standingsWithoutFeyenoord = [...BASE_STANDINGS].filter(
// 				(team) => team.name.toLowerCase() !== 'feyenoord',
// 			);

// 			// Act
// 			const result = getStandingsSubSet(standingsWithoutFeyenoord);

// 			// Assert
// 			expect(result).toEqual(standingsWithoutFeyenoord);
// 		});
// 	});

// 	describe('subSet order', () => {
// 		describe('default limit', () => {
// 			test('should return a subset of positions: feyenoord, 2, 3, 4, 5, 6, 7', () => {
// 				// Act
// 				const result = getStandingsSubSet(BASE_STANDINGS);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...BASE_STANDINGS].slice(0, 7);
// 				const expectedFeyenoordIndex = 0;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 1, feyenoord, 3, 4, 5, 6, 7', () => {
// 				// Arrange
// 				const newIndex = 1;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(0, 7);
// 				const expectedFeyenoordIndex = 1;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 1, 2, feyenoord, 4, 5, 6, 7', () => {
// 				// Arrange
// 				const newIndex = 2;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(0, 7);
// 				const expectedFeyenoordIndex = 2;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 1, 2, 3, feyenoord, 5, 6, 7', () => {
// 				// Arrange
// 				const newIndex = 3;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(0, 7);
// 				const expectedFeyenoordIndex = 3;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 2, 3, 4, feyenoord, 6, 7, 8', () => {
// 				// Arrange
// 				const newIndex = 4;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(1, 8);
// 				const expectedFeyenoordIndex = 3;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 3, 4, 5, feyenoord, 7, 8, 9', () => {
// 				// Arrange
// 				const newIndex = 5;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(2, 9);
// 				const expectedFeyenoordIndex = 3;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 4, 5, 6, feyenoord, 8, 9, 10', () => {
// 				// Arrange
// 				const newIndex = 6;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(3, 10);
// 				const expectedFeyenoordIndex = 3;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 4, 5, 6, 7 feyenoord, 9, 10', () => {
// 				// Arrange
// 				const newIndex = 7;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(3, 10);
// 				const expectedFeyenoordIndex = 4;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 4, 5, 6, 7, 8, feyenoord, 10', () => {
// 				// Arrange
// 				const newIndex = 8;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(3, 10);
// 				const expectedFeyenoordIndex = 5;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});

// 			test('should return a subset of positions: 4, 5, 6, 7, 8, 9, feyenoord', () => {
// 				// Arrange
// 				const newIndex = 9;
// 				const standings = moveFeyenoordToNewIndex(newIndex);

// 				// Act
// 				const result = getStandingsSubSet(standings);
// 				const feyenoordIndex = getFeyenoordIndex(result);

// 				// Assert
// 				const expected = [...standings].slice(3, 10);
// 				const expectedFeyenoordIndex = 6;

// 				expect(result).toEqual(expected);
// 				expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 			});
// 		});

// 		describe('custom limit', () => {
// 			describe('odd size', () => {
// 				const SUBSET_SIZE = 5;

// 				test('should return a subset of positions: feyenoord, 2, 3, 4, 5', () => {
// 					// Act
// 					const result = getStandingsSubSet(BASE_STANDINGS, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...BASE_STANDINGS].slice(0, 5);
// 					const expectedFeyenoordIndex = 0;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 1, feyenoord, 3, 4, 5', () => {
// 					// Arrange
// 					const newIndex = 1;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(0, 5);
// 					const expectedFeyenoordIndex = 1;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 1, 2, feyenoord, 4, 5', () => {
// 					// Arrange
// 					const newIndex = 2;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(0, 5);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 2, 3, feyenoord, 5, 6', () => {
// 					// Arrange
// 					const newIndex = 3;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(1, 6);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 3, 4, feyenoord, 6, 7', () => {
// 					// Arrange
// 					const newIndex = 4;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(2, 7);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 4, 5, feyenoord, 7, 8', () => {
// 					// Arrange
// 					const newIndex = 5;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(3, 8);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 5, 6, feyenoord, 8, 9', () => {
// 					// Arrange
// 					const newIndex = 6;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(4, 9);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 6, 7, feyenoord, 9, 10', () => {
// 					// Arrange
// 					const newIndex = 7;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(5, 10);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 6, 7, 8, feyenoord, 10', () => {
// 					// Arrange
// 					const newIndex = 8;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(5, 10);
// 					const expectedFeyenoordIndex = 3;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 6, 7, 8, 9, feyenoord', () => {
// 					// Arrange
// 					const newIndex = 9;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(5, 10);
// 					const expectedFeyenoordIndex = 4;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});
// 			});

// 			describe('even size', () => {
// 				const SUBSET_SIZE = 4;

// 				test('should return a subset of positions: feyenoord, 2, 3, 4', () => {
// 					// Act
// 					const result = getStandingsSubSet(BASE_STANDINGS, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...BASE_STANDINGS].slice(0, 4);
// 					const expectedFeyenoordIndex = 0;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 1, feyenoord, 3, 4', () => {
// 					// Arrange
// 					const newIndex = 1;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(0, 4);
// 					const expectedFeyenoordIndex = 1;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 1, 2, feyenoord, 4', () => {
// 					// Arrange
// 					const newIndex = 2;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(0, 4);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 2, 3, feyenoord, 5', () => {
// 					// Arrange
// 					const newIndex = 3;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(1, 5);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 3, 4, feyenoord, 6', () => {
// 					// Arrange
// 					const newIndex = 4;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(2, 6);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 4, 5, feyenoord, 7', () => {
// 					// Arrange
// 					const newIndex = 5;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(3, 7);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 5, 6, feyenoord, 8', () => {
// 					// Arrange
// 					const newIndex = 6;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(4, 8);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 6, 7, feyenoord, 9', () => {
// 					// Arrange
// 					const newIndex = 7;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(5, 9);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 7, 8, feyenoord, 10', () => {
// 					// Arrange
// 					const newIndex = 8;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(6, 10);
// 					const expectedFeyenoordIndex = 2;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});

// 				test('should return a subset of positions: 7, 8, 9, feyenoord', () => {
// 					// Arrange
// 					const newIndex = 9;
// 					const standings = moveFeyenoordToNewIndex(newIndex);

// 					// Act
// 					const result = getStandingsSubSet(standings, SUBSET_SIZE);
// 					const feyenoordIndex = getFeyenoordIndex(result);

// 					// Assert
// 					const expected = [...standings].slice(6, 10);
// 					const expectedFeyenoordIndex = 3;

// 					expect(result).toEqual(expected);
// 					expect(feyenoordIndex).toEqual(expectedFeyenoordIndex);
// 				});
// 			});
// 		});
// 	});
// });
