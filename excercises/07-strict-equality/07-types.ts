export type AvailablePizzas = 'Margherita' | 'Salami';

export type Pizza = {
	name: string;
	vegetarian: boolean;
	vegan: boolean;
	price: number;
	discount?: number;
};

export type Pizzas = Pizza[];
