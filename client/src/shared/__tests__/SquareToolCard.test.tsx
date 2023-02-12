import { expect } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { Tool } from 'utils/tools';
import SquareToolCard from 'shared/SquareToolCard';
import { Helpers } from 'utils/helpers';

const mockTool = new Tool(
	'Quadratic Formula',
	'description2',
	'Physics',
	'function'
);

beforeEach(() => {
	render(<SquareToolCard tool={mockTool} />);
});
afterEach(() => {
	cleanup();
});

it('should have div with correct class based on tool category', () => {
	const divElements = document.getElementsByTagName('div');
	expect(divElements[1]).toHaveClass(Helpers.stripAllSpaces(mockTool.category));
});

it('should have image corresponding to tool', () => {
	const imgElement = document.getElementsByTagName('img');
	expect(imgElement[0]).toHaveAttribute(
		'src',
		`/icons/${mockTool.iconName}.png`
	);
});

it('should have correct title and category based on given tool', () => {
	const paragraphElements = document.getElementsByTagName('p');
	expect(paragraphElements[0].textContent).toBe(mockTool.title);
	expect(paragraphElements[1].textContent).toBe(mockTool.category);
});
