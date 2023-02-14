import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';
import { useState } from 'react';
import SquareToolCards from '../SquareToolCards';
import { MemoryRouter } from 'react-router-dom';
import { Tool } from 'utils/tools';

const mockToolsArray = [
	new Tool('Percentage', 'description1', 'test', 'percentage'),
	new Tool('Quadratic Formula', 'description2', 'test', 'function'),
	new Tool('Fraction to percentage', 'description1', 'test', 'fraction'),
	new Tool('Area of a circle', 'description2', 'test', 'circle'),
	new Tool('Density', 'description1', 'test', 'density'),
];

const MockSquareToolCards = () => {
	return (
		<MemoryRouter>
			<SquareToolCards searchQuery="percentage" toolsArray={mockToolsArray} />
		</MemoryRouter>
	);
};

it('should render correct list of filtered tools', async () => {
	render(<MockSquareToolCards />);

	const linkElements = await screen.findAllByRole('link');
	expect(linkElements).toHaveLength(2);
});
