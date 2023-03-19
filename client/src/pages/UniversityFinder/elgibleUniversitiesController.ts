type University = {
	'2023': { S: string };
	'Average entry tariff': { S: string };
	Institution: { S: string };
};

const getNunberOfEligibleUniversities = (
	universities: Array<University>,
	limit: number,
	sortDirection = 'descending'
): Array<University> => {
	const sortedUniversities = sortUniversities(universities, sortDirection);
	const listToReturn = [];
	for (let i = 0; i < limit; i++) {
		if (sortedUniversities[i] === undefined) return listToReturn;

		listToReturn.push(sortedUniversities[i]);
	}

	return listToReturn;
};

const sortUniversities = (
	universities: Array<University>,
	sortDirection: string
): Array<University> => {
	if (sortDirection === 'ascending') {
		universities.sort(
			(a: University, b: University) =>
				Number.parseInt(a['Average entry tariff']['S']) -
				Number.parseInt(b['Average entry tariff']['S'])
		);
		return universities;
	}

	universities.sort(
		(a: University, b: University) =>
			Number.parseInt(b['Average entry tariff']['S']) -
			Number.parseInt(a['Average entry tariff']['S'])
	);

	return universities;
};

export default getNunberOfEligibleUniversities;
