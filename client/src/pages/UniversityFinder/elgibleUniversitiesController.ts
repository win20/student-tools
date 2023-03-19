import UniversityModel from 'models/UniversityModel';

const getNunberOfEligibleUniversities = (
	universities: Array<UniversityModel>,
	limit: number,
	sortDirection = 'descending'
): Array<UniversityModel> => {
	const sortedUniversities = sortUniversities(universities, sortDirection);
	const listToReturn = [];
	for (let i = 0; i < limit; i++) {
		if (sortedUniversities[i] === undefined) return listToReturn;

		listToReturn.push(sortedUniversities[i]);
	}

	return listToReturn;
};

const sortUniversities = (
	universities: Array<UniversityModel>,
	sortDirection: string
): Array<UniversityModel> => {
	if (sortDirection === 'ascending') {
		universities.sort(
			(a: UniversityModel, b: UniversityModel) =>
				Number.parseInt(a['Average entry tariff']['S']) -
				Number.parseInt(b['Average entry tariff']['S'])
		);
		return universities;
	}

	universities.sort(
		(a: UniversityModel, b: UniversityModel) =>
			Number.parseInt(b['Average entry tariff']['S']) -
			Number.parseInt(a['Average entry tariff']['S'])
	);

	return universities;
};

export default getNunberOfEligibleUniversities;
