import { Helpers } from '../../utils/helpers';

const FilterPill = () => {
	const setFilter = (filter: string): void => {
		filters.forEach((item) => {
			if (item !== filter && item !== 'All') {
				const elements: NodeListOf<Element> = document.querySelectorAll(
					`.${Helpers.stripAllSpaces(item)}`
				);
				elements.forEach((item) => {
					item.classList.add('hidden');
				});

				const filterBtn: Element | null = document.querySelector(
					`#${Helpers.stripAllSpaces(item)}`
				);
				filterBtn!.classList.replace('bg-primary', 'bg-secondary');

				const allBtn: Element | null = document.querySelector('#All');
				allBtn!.classList.replace('bg-primary', 'bg-secondary');
			}
		});

		if (filter === 'All') {
			filters.forEach((item) => {
				const elements: NodeListOf<Element> = document.querySelectorAll(
					`.${Helpers.stripAllSpaces(item)}`
				);

				elements.forEach((item) => {
					item.classList.remove('hidden');
				});
			});
		} else {
			const itemsToShow: NodeListOf<Element> = document.querySelectorAll(
				`.${Helpers.stripAllSpaces(filter)}`
			);
			itemsToShow.forEach((item) => {
				item.classList.remove('hidden');
			});
		}

		const filterBtn: Element | null = document.querySelector(
			`#${Helpers.stripAllSpaces(filter)}`
		);
		filterBtn!.classList.replace('bg-secondary', 'bg-primary');
	};

	const filters: string[] = [
		'All',
		'Maths',
		'Physics',
		'Life and Finance',
		'Health',
	];

	const filterButtons: JSX.Element[] = filters.map((filter, i: any) => (
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
