import { expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { Tool } from 'utils/tools';
import SuggestedTools from 'shared/SuggestedTools';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PercentageIndex from 'pages/Tools/Percentage/PercentageIndex';

const mockToolsArray = [
	new Tool('PercentageIndex', 'description2', 'Maths', 'function'),
	new Tool('Quadratic Formula', 'description1', 'Maths', 'function'),
];

// const MockRouting = () => {
// 	return (
// 		<MemoryRouter initialEntries={['/suggested-tools']}>
// 			<Routes>
// 				<Route path="/tools/percentage" element={<PercentageIndex />} />
// 				<Route
// 					path="/suggested-tools"
// 					element={<SuggestedTools toolsArray={mockToolsArray} />}
// 				/>
// 			</Routes>
// 		</MemoryRouter>
// 	);
// };
//
// beforeEach(() => {
// 	render(<MockRouting />);
// });
// afterEach(() => {
// 	cleanup();
// });
//
// it('should receive tools array as prop', () => {
// 	const divElements = document.getElementsByClassName('suggested-tool');
// 	expect(divElements).toHaveLength(mockToolsArray.length);
// });
//
// // TODO Add test to check second link, when content is added
// it('should link to correct tool page', async () => {
// 	const linkElement = screen.getAllByLabelText('go to tool page');
// 	await userEvent.click(linkElement[0]);
//
// 	expect(
// 		screen.getByRole('heading', { name: 'Percentage Calculators' })
// 	).toBeInTheDocument();
// });
