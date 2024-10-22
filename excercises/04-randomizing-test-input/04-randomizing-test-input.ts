export const add = (a: number, b: number) => {
	if (!a || !b) {
		throw new Error('Please supply 2 values to be added');
	}

	return a + b;
};
