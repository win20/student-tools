import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Routes, Route, MemoryRouter, Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ToolsLoader from './ToolsLoader';

const MockRedirectButton = () => {
	return <Link to={'/tools/percentage'}>Go to percentage page</Link>;
};

const MockToolsLoader = () => {
	return (
		<MemoryRouter initialEntries={['/']}>
			<Routes>
				<Route path="/" element={<MockRedirectButton />} />
				<Route path="/tools/:toolid" element={<ToolsLoader />} />
			</Routes>
		</MemoryRouter>
	);
};

it('should load the correct tool page', async () => {
	render(<MockToolsLoader />);
	await userEvent.click(screen.getByRole('link'));

	expect(
		screen.getByRole('heading', { name: 'Percentage Calculators' })
	).toBeInTheDocument();
});
