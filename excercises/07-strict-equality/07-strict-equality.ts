import { type Pizza, Pizzas, AvailablePizzas } from './07-types';

const pizzas: Pizzas = [
	{
		name: 'Margherita',
		vegetarian: true,
		vegan: false,
		price: 12.5,
		discount: undefined,
	},
	{
		name: 'Salami',
		vegetarian: false,
		vegan: false,
		price: 15,
		discount: 2,
	},
] as const;

export const getPizza = (type: AvailablePizzas): Pizza | undefined => {
	return pizzas.find((pizza) => pizza.name === type);
};

export const getPizzaNames = (): string[] => pizzas.map((pizza) => pizza.name);
