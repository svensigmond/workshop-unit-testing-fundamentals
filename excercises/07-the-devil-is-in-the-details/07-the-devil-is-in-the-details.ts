import { isBefore } from 'date-fns';
import { type Standings } from './07-types';

/**
 * Checks if the given date is before July 1st of the same year
 *
 * @param date - The date to compare with July 1st
 * @returns true if the given date is before July 1st of the same year, false otherwise
 */
export const isDateBeforeJulyFirst = (date: Date): boolean => {
	const YEAR = date.getFullYear();
	const JULY_FIRST = new Date(YEAR, 7, 1);

	return isBefore(date, JULY_FIRST);
};

/**
 * Generate a subset of the standings array that includes the team "Feyenoord" and a number of teams around it
 *
 * @param standings - The full standings array for a specific competition
 * @limit limit - The number of teams to include in the subset, default is 7
 */
export const getStandingsSubSet = (
	standings: Standings,
	limit: number = 7,
): Standings => {
	const feyenoordIndex = standings.findIndex((item) =>
		item.name.toLocaleLowerCase().includes('feyenoord'),
	);

	// If "feyenoord" is not found in the standings, return the full standings array.
	if (feyenoordIndex === -1) {
		return standings;
	}

	const halfOfLimit = Math.floor(limit / 2);

	// If "feyenoord" is within the first half of the subset, the subset starts from the beginning of the array.
	if (feyenoordIndex < halfOfLimit) {
		return standings.slice(0, limit);
	}

	// If "feyenoord" is within the last half of the subset, the subset ends at the end of the array.
	if (feyenoordIndex > standings.length - halfOfLimit) {
		return standings.slice(standings.length - limit);
	}

	// If "feyenoord" is somewhere in the middle, the subset includes half of the subset size before "feyenoord" and half of the subset size after.
	// If the subset size is even, half of the subset minus 1 is used after "feyenoord".
	const start = feyenoordIndex - halfOfLimit;
	const end = feyenoordIndex + halfOfLimit + (limit % 2 === 0 ? 0 : 1);

	return standings.slice(start, end);
};
