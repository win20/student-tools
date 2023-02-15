import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FilterPill from '../FilterPill';
import SquareToolCards from '../SquareToolCards';
import { Tool } from 'utils/tools';

const mockFiltersList: string[] = [
	'All',
	'Maths',
	'Physics',
	'Life and Finance',
	'Health',
];

const mockToolsArray: Tool[] = [
	new Tool('Percentage', 'description1', 'Maths', 'percentage'),
	new Tool('Quadratic Formula', 'description2', 'Maths', 'function'),
	new Tool('Fraction to percentage', 'description1', 'Physics', 'fraction'),
	new Tool('Area of a circle', 'description2', 'Physics', 'circle'),
	new Tool('Density', 'description1', 'Physics', 'density'),
];

const MockAppSetup = () => {
	return (
		<>
			<FilterPill filters={mockFiltersList} />
			<MemoryRouter>
				<SquareToolCards searchQuery="" toolsArray={mockToolsArray} />
			</MemoryRouter>
		</>
	);
};

it('should render the correct filter buttons given an array of categories', () => {
	render(<MockAppSetup />);
	const filterButtons = screen.getAllByRole('button');

	expect(filterButtons).toHaveLength(mockFiltersList.length);
});

it('should hide items where category != filter', async () => {
	render(<MockAppSetup />);

	await userEvent.click(screen.getByRole('button', { name: 'Maths' }));
	const itemsToBeHidden1 = document.querySelectorAll('.Physics');

	itemsToBeHidden1.forEach((item) => {
		expect(item).toHaveClass('hidden');
	});
});

it('should show all elements when "All" filter is clicked', async () => {
	render(<MockAppSetup />);

	await userEvent.click(screen.getByRole('button', { name: 'All' }));
	expect(screen.getAllByRole('button')).toHaveLength(mockFiltersList.length);
});

it('should change the background colour of filter buttons when clicked', async () => {
	render(<MockAppSetup />);

	const clickedFilterBtn = screen.getByRole('button', { name: 'Maths' });

	await userEvent.click(clickedFilterBtn);
	expect(clickedFilterBtn).toHaveClass('bg-primary');
});
