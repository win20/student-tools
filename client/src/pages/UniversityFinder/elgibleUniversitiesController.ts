import UniversityModel from 'models/UniversityModel';

export type SortByOptions = 'ucas' | 'rank' | '';
export type SortDirections = 'ascending' | 'descending' | '';

const getNunberOfEligibleUniversities = (
	universities: Array<UniversityModel>,
	limit: number,
	sortDirection: SortDirections = 'descending'
): Array<UniversityModel> => {
	const sortedUniversities = sortUniversities(
		universities,
		'ucas',
		sortDirection
	);
	const listToReturn = [];
	for (let i = 0; i < limit; i++) {
		if (sortedUniversities[i] === undefined) return listToReturn;

		listToReturn.push(sortedUniversities[i]);
	}

	return listToReturn;
};

const sortUniversities = (
	universities: Array<UniversityModel>,
	sortBy: SortByOptions,
	sortDirection: SortDirections
): Array<UniversityModel> => {
	switch (sortBy) {
		case 'ucas': {
			if (sortDirection === 'ascending') {
				universities.sort(
					(a: UniversityModel, b: UniversityModel) =>
						Number.parseInt(a['Average entry tariff']['S']) -
						Number.parseInt(b['Average entry tariff']['S'])
				);
			} else {
				universities.sort(
					(a: UniversityModel, b: UniversityModel) =>
						Number.parseInt(b['Average entry tariff']['S']) -
						Number.parseInt(a['Average entry tariff']['S'])
				);
			}

			break;
		}

		case 'rank': {
			if (sortDirection === 'ascending') {
				universities.sort(
					(a: UniversityModel, b: UniversityModel) =>
						Number.parseInt(a['2023']['S']) - Number.parseInt(b['2023']['S'])
				);
			} else {
				universities.sort(
					(a: UniversityModel, b: UniversityModel) =>
						Number.parseInt(b['2023']['S']) - Number.parseInt(a['2023']['S'])
				);
			}
			break;
		}
	}
	return universities;
};

export default getNunberOfEligibleUniversities;
export { getNunberOfEligibleUniversities, sortUniversities };
