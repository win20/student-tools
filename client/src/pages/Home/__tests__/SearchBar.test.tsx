import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';
import { useState } from 'react';

const MockComponent = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<div>
			<SearchBar setSearchQuery={setSearchQuery} />
			<h1>{searchQuery}</h1>
		</div>
	);
};

it('sets search query appropriately', async () => {
	render(<MockComponent />);

	const searchInputElement = screen.getByPlaceholderText('Search...');
	const buttonElement = screen.getByRole('button');

	const textToType = 'percentage';
	await userEvent.type(searchInputElement, textToType);
	await userEvent.click(buttonElement);

	const headingElement = screen.getByRole('heading');
	expect(headingElement.textContent).toBe(textToType);
});
