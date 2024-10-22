export enum SortDirection {
	ASC = 'ascending',
	DESC = 'descending',
}

export enum SortBy {
	FIRST_NAME = 'firstName',
	LAST_NAME = 'lastName',
}

export type Person = {
	firstName: string;
	lastName: string;
	lastNamePrefix?: string;
	age: number;
	gender: string;
};

export type Persons = Person[];
