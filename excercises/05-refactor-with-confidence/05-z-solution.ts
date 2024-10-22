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

const calculateTotal = (order: Order): number =>
	order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

const applyDiscount = (
	total: number,
	membershipLevel: MembershipLevel,
): number => {
	switch (membershipLevel) {
		case 'silver':
			total *= 0.95;

			break;
		case 'gold':
			total *= 0.9;

			break;
		case 'platinum':
			total *= 0.85;

			break;
	}

	if (total > 1000) {
		total *= 0.9;
	}

	return total;
};

export const processOrder = (order: Order): number => {
	const total = calculateTotal(order);

	return applyDiscount(total, order.customer.membershipLevel);
};
