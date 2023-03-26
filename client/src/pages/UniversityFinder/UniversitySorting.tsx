import { ChangeEvent } from 'react';
type propsType = {
	handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const UniversitySorting = (props: propsType) => {
	const handleDropdownChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		props.handleSort(event);
	};
	return (
		<div>
			<select
				name="sortingOptions"
				id="sortingOptions"
				className="p-2 rounded-md mb-2 hover:cursor-pointer"
				onChange={handleDropdownChange}
			>
				<option value="Sort">Sort</option>
				<option value="tariffHighToLow">UCAS tariff (high - low)</option>
				<option value="tariffLowToHigh">UCAS tariff (low - high)</option>
				<option value="rankHighToLow">Rank (high - low)</option>
				<option value="rankLowToHigh">Rank (low - high)</option>
			</select>
		</div>
	);
};

export default UniversitySorting;
