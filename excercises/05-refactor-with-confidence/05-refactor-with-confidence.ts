type MembershipLevel = 'none' | 'silver' | 'gold' | 'platinum';

export type Order = {
	id: number;
	items: { name: string; price: number; quantity: number }[];
	customer: {
		id: number;
		name: string;
		membershipLevel: MembershipLevel;
	};
};

/* 
	Refactor this method so it has fewer responsibilities by extracting the sum logic and discount calculation logic
	into a separate functions, which are called from this function. This method should return the final result 

	function suggestions:
	 - processOrder
	 - calculateTotal
	 - applyDiscount
*/
export const processOrder = (order: Order): number => {
	let total = 0;

	/* Refactor to use a reduce method */
	for (let i = 0; i < order.items.length; i++) {
		total += order.items[i].price * order.items[i].quantity;
	}

	/* Refactor to use a switch statement */
	if (order.customer.membershipLevel === 'silver') {
		total *= 0.95;
	} else if (order.customer.membershipLevel === 'gold') {
		total *= 0.9;
	} else if (order.customer.membershipLevel === 'platinum') {
		total *= 0.85;
	}

	if (total > 1000) {
		total *= 0.9;
	}

	return total;
};
