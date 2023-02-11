import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from 'shared/Header';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const MockHeader = () => {
	return (
		<MemoryRouter initialEntries={['/test']}>
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/test" element={<Header />} />
			</Routes>
		</MemoryRouter>
	);
};

it('should render full header with tagline if no toolid is passed', () => {
	render(<MockHeader />);
	expect(
		screen.getByRole('heading', { name: /All the tools to help students/i })
	).toBeInTheDocument();
});

it('should link back to home page in logo is clicked', async () => {
	render(<MockHeader />);

	const linkElement = screen.getByLabelText('go to home page');
	await userEvent.click(linkElement);
	expect(
		screen.getByRole('heading', { name: 'Home Page' })
	).toBeInTheDocument();
});
