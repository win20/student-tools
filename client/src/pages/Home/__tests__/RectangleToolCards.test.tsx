import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Tool } from 'utils/tools';
import RectangleToolCards from '../RectangleToolCards';

const mockToolsArray = [
	new Tool('Percentage', 'description1', 'test', 'percentage'),
	new Tool('Quadratic Formula', 'description2', 'test', 'function'),
	new Tool('Fraction to percentage', 'description1', 'test', 'fraction'),
	new Tool('Area of a circle', 'description2', 'test', 'circle'),
	new Tool('Density', 'description1', 'test', 'density'),
];

const MockRectangleToolCards = () => {
	return (
		<MemoryRouter>
			<RectangleToolCards
				searchQuery="percentage"
				toolsArray={mockToolsArray}
			/>
		</MemoryRouter>
	);
};

it.skip('should render correct list of filtered tools', async () => {
	render(<MockRectangleToolCards />);

	const linkElements = await screen.findAllByRole('link');
	expect(linkElements).toHaveLength(2);
});
