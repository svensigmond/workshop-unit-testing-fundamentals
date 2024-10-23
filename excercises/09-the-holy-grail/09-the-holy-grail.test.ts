import { describe, expect, test } from 'vitest';
import { type Persons } from './09-types';
import { sortByName, getAvarageAge } from './09-the-holy-grail';

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

	describe('getAvarageAge', () => {});

	describe('sortByName', () => {});
});
