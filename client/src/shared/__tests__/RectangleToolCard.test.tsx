import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tool } from 'utils/tools';
import { Helpers } from 'utils/helpers';
import RectangleToolCard from 'shared/RectangleToolCard';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PercentageIndex from 'pages/Tools/Percentage/PercentageIndex';
import userEvent from '@testing-library/user-event';

const mockTool = new Tool(
	'PercentageIndex',
	'description2',
	'Physics',
	'function'
);

const MockRectangleCard = () => {
	return (
		<MemoryRouter initialEntries={['/']}>
			<Routes>
				<Route
					path="/"
					element={
						<RectangleToolCard
							tool={mockTool}
							linkPath={`/tools/${Helpers.urlCleaner(mockTool.title)}`}
						/>
					}
				/>
				<Route path="/tools/percentage" element={<PercentageIndex />} />
			</Routes>
		</MemoryRouter>
	);
};

it('should link to the correct tool page', async () => {
	render(<MockRectangleCard />);
	await userEvent.click(screen.getByRole('link'));
	expect(
		screen.getByRole('heading', { name: 'Percentage Calculators' })
	).toBeInTheDocument();
});
