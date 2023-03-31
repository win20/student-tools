import { ChangeEvent } from 'react';

type propsType = {
	handleAmountToDisplay: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const AmountToDisplayDropdown = (props: propsType) => {
	const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
		props.handleAmountToDisplay(event);
	};
	return (
		<select
			name="amountToDisplay"
			id="sortingOptions"
			className="p-2 rounded-md mb-2 ml-2 hover:cursor-pointer"
			onChange={handleDropdownChange}
		>
			<option value="Sort">How many to display?</option>
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="15">15</option>
		</select>
	);
};

export default AmountToDisplayDropdown;
