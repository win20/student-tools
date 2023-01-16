import { Helpers } from '../../utils/helpers';

const FilterPill = () => {
	const setFilter = (filter: any) => {
		filters.forEach((item) => {
			if (item !== filter && item !== 'All') {
				const elements = document.querySelectorAll(
					`.${Helpers.stripAllSpaces(item)}`
				);
				elements.forEach((item) => {
					item.classList.add('hidden');
				});

				const filterBtn = document.querySelector(
					`#${Helpers.stripAllSpaces(item)}`
				);
				filterBtn!.classList.replace('bg-primary', 'bg-secondary');

				const allBtn = document.querySelector('#All');
				allBtn!.classList.replace('bg-primary', 'bg-secondary');
			}
		});

		if (filter === 'All') {
			filters.forEach((item) => {
				const elements = document.querySelectorAll(
					`.${Helpers.stripAllSpaces(item)}`
				);

				elements.forEach((item) => {
					item.classList.remove('hidden');
				});
			});
		} else {
			const itemsToShow = document.querySelectorAll(
				`.${Helpers.stripAllSpaces(filter)}`
			);
			itemsToShow.forEach((item) => {
				item.classList.remove('hidden');
			});
		}

		const filterBtn = document.querySelector(
			`#${Helpers.stripAllSpaces(filter)}`
		);
		filterBtn!.classList.replace('bg-secondary', 'bg-primary');
	};

	const filters = ['All', 'Maths', 'Physics', 'Life and Finance', 'Health'];

	const filterButtons = filters.map((filter, i: any) => (
		<button
			key={i}
			id={Helpers.stripAllSpaces(filter)}
			className="mr-2 my-1 bg-secondary px-4 py-1 rounded-full hover:bg-secondaryHighlight"
			onClick={(e) => setFilter(filter)}
		>
			<p className="text-lightText">{filter}</p>
		</button>
	));

	return <div id="FilterPill">{filterButtons}</div>;
};

export default FilterPill;
