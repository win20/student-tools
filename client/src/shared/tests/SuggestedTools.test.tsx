import { expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { Tool } from 'utils/tools';
import SuggestedTools from 'shared/SuggestedTools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ToolsLoader from 'pages/Tools/ToolsLoader';

const mockToolsArray = [
	new Tool('Percentage', 'description2', 'Maths', 'function'),
	new Tool('Quadratic Formula', 'description1', 'Maths', 'function'),
];

const MockSuggestedTools = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/tools/:toolid" element={<ToolsLoader />} />
			</Routes>
			<SuggestedTools toolsArray={mockToolsArray} />
		</BrowserRouter>
	);
};

beforeEach(() => {
	render(<MockSuggestedTools />);
});
afterEach(() => {
	cleanup();
});

it('should receive tools array as prop', () => {
	const divElements = document.getElementsByClassName('suggested-tool');
	expect(divElements).toHaveLength(mockToolsArray.length);
});

// TODO: Add test to check second link, when content is added
it('should link to correct tool page', async () => {
	const linkElements = screen.getAllByRole('link');
	await userEvent.click(linkElements[0]);
	expect(screen.getByText(/Percentage Calculators/i)).toBeInTheDocument();
});
