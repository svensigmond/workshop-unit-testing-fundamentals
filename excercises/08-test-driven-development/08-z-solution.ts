/*************************************************************************************/
/* 08-test-driven-development.ts
/*************************************************************************************/
import { type Person, type Persons, SortDirection, SortBy } from './08-types';

export const getAvarageAge = (persons: Persons): number =>
	persons.map((person) => person.age).reduce((acc, age) => acc + age, 0) /
	persons.length;

export const sortByName = (
	persons: Persons,
	order: SortDirection,
	sortBy: SortBy,
): Persons => {
	return [...persons].sort((a, b) => {
		const getField = (person: Person): string =>
			sortBy === SortBy.FIRST_NAME ? person.firstName : person.lastName;

		const fieldA = getField(a);
		const fieldB = getField(b);

		return order === SortDirection.ASC
			? fieldA.localeCompare(fieldB)
			: fieldB.localeCompare(fieldA);
	});
};

/*************************************************************************************/
/* 08-test-driven-development.test.ts
/*************************************************************************************/
import { describe, expect, test } from 'vitest';
import { type Persons, SortDirection, SortBy } from './08-types';
import { sortByName, getAvarageAge } from './08-test-driven-development';

describe('test-driven-development', () => {
	const DATA: Persons = [
		{
			firstName: 'Sven',
			lastName: 'Sigmond',
			age: 38,
			gender: 'male',
		},
		{
			firstName: 'Inci',
			lastName: 'Yesiltepe',
			age: 24,
			gender: 'female',
		},
		{
			firstName: 'Ivo',
			lastName: 'Knaap',
			lastNamePrefix: 'van der',
			age: 26,
			gender: 'male',
		},
		{
			firstName: 'Rogier',
			lastName: 'Zeebregts',
			age: 42,
			gender: 'male',
		},
		{
			firstName: 'Rudin',
			lastName: 'Swagerman',
			age: 43,
			gender: 'male',
		},
		{
			firstName: 'Jori',
			lastName: 'Regter',
			age: 28,
			gender: 'male',
		},
	];

	describe('getAvarageAge', () => {
		test('should return the average age of all people', () => {
			// Act
			const result = getAvarageAge(DATA);

			// Assert
			const expected = 33.5;

			expect(result).toBe(expected);
		});
	});

	describe('sortByName', () => {
		test('should sort people in ascending order by first name', () => {
			// Act
			const result = sortByName(DATA, SortDirection.ASC, SortBy.FIRST_NAME);

			// Assert
			const expected: Persons = [];

			expected.push(DATA[1]); // Inci
			expected.push(DATA[2]); // Ivo
			expected.push(DATA[5]); // Jori
			expected.push(DATA[3]); // Rogier
			expected.push(DATA[4]); // Rudin
			expected.push(DATA[0]); // Sven

			expect(result).toStrictEqual(expected);
		});

		test('should sort people in descending order by first name', () => {
			// Act
			const result = sortByName(DATA, SortDirection.DESC, SortBy.FIRST_NAME);

			// Assert
			const expected: Persons = [];

			expected.push(DATA[0]); // Sven
			expected.push(DATA[4]); // Rudin
			expected.push(DATA[3]); // Rogier
			expected.push(DATA[5]); // Jori
			expected.push(DATA[2]); // Ivo
			expected.push(DATA[1]); // Inci

			expect(result).toStrictEqual(expected);
		});

		test('should sort people in ascending order by last name', () => {
			// Act
			const result = sortByName(DATA, SortDirection.ASC, SortBy.LAST_NAME);

			// Assert
			const expected: Persons = [];

			expected.push(DATA[2]); // Knaap
			expected.push(DATA[5]); // Regter
			expected.push(DATA[0]); // Sigmond
			expected.push(DATA[4]); // Swagerman
			expected.push(DATA[1]); // Yesiltepe
			expected.push(DATA[3]); // Zeebregts

			expect(result).toStrictEqual(expected);
		});

		test('should sort people in descending order by last name', () => {
			// Act
			const result = sortByName(DATA, SortDirection.DESC, SortBy.LAST_NAME);

			// Assert
			const expected: Persons = [];

			expected.push(DATA[3]); // Zeebregts
			expected.push(DATA[1]); // Yesiltepe
			expected.push(DATA[4]); // Swagerman
			expected.push(DATA[0]); // Sigmond
			expected.push(DATA[5]); // Regter
			expected.push(DATA[2]); // Knaap

			expect(result).toStrictEqual(expected);
		});
	});
});
