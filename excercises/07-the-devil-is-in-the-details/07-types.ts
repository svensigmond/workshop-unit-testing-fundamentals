type StandingsRank = {
	rank: number;
	name: string;
	points: number;
	goalsFor: number;
	goalsAgainst: number;
	goalDifference: number;
	matchesPlayed: number;
};

export type Standings = StandingsRank[];
