import { Helpers } from '../../utils/helpers';

type propsType = {
	filters: string[];
};

const FilterPill = (props: propsType) => {
	const setFilter = (filter: string): void => {
		props.filters.forEach((item) => {
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
				if (filterBtn != null)
					filterBtn.classList.replace('bg-primary', 'bg-secondary');

				const allBtn: Element | null = document.querySelector('#All');
				if (allBtn != null)
					allBtn.classList.replace('bg-primary', 'bg-secondary');
			}
		});

		if (filter === 'All') {
			props.filters.forEach((item) => {
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
		if (filterBtn != null)
			filterBtn.classList.replace('bg-secondary', 'bg-primary');
	};

	const filterButtons: JSX.Element[] = props.filters.map(
		(filter: string, i: number) => (
			<button
				key={i}
				id={Helpers.stripAllSpaces(filter)}
				className="mt-2 filterPillsBreakpoint:mt-0 mr-2 my-1 bg-secondary px-4 py-1 rounded-full hover:bg-secondaryHighlight"
				onClick={() => setFilter(filter)}
			>
				<p className="text-lightText">{filter}</p>
			</button>
		)
	);

	return <div id="FilterPill">{filterButtons}</div>;
};

export default FilterPill;
