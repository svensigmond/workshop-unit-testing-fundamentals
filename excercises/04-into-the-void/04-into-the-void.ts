export const state: Array<string> = [];

export const addPerson = (name: string): void => {
	state.push(name);
};
