import { type Person, type Persons, SortDirection, SortBy } from './08-types';

/* 
	Based on the function parameters the task is as follows:

	1: Write unit tests that covers the case below:

	----------------------------------------------------------------------------------------
	- Calculate the average age of the persons.
	----------------------------------------------------------------------------------------

	2: Implement the logic once tests have been written.
*/
export const getAvarageAge = (persons: Persons): number => 0;

/* 
	Based on the function parameters the task is as follows:

	1: Write unit tests that cover the cases below: 

	----------------------------------------------------------------------------------------
	- Ensure you don't mutate the original persons array.
	- Sort the persons by the given sortBy argument in the given order.
	- If the order is 'asc' the persons should be sorted in ascending order.
	- If the order is 'desc' the persons should be sorted in descending order.
	- If the sortBy argument is 'firstName' the persons should be sorted by the firstName.
	- If the sortBy argument is 'lastName' the persons should be sorted by the lastName.
	----------------------------------------------------------------------------------------

	2: Implement the logic once tests have been written. 
*/
export const sortByName = (
	persons: Persons,
	order: SortDirection,
	sortBy: SortBy,
): Persons => [];
