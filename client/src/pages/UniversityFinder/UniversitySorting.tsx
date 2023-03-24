const UniversitySorting = () => {
	return (
		<div>
			<select
				name="sortingOptions"
				id="sortingOptions"
				className="p-2 rounded-md mb-2 hover:cursor-pointer"
			>
				<option value="Sort">Sort</option>
				<option value="tariffHighToLow">UCAS tariff (high - low)</option>
				<option value="tariffLowToHigh">UCAS tariff (low - high)</option>
				<option value="rankHighToLow">Rank (high - low)</option>
				<option value="highToLow">Rank (low - high)</option>
			</select>
		</div>
	);
};

export default UniversitySorting;
