import { expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CalculateButton from 'shared/CalculateButton';

const testFunction = (): void => {
	const element = document.getElementById('para') as HTMLElement;
	if (element !== null) {
		element.textContent = 'test';
	}
};

const MockComponent = (): JSX.Element => {
	return (
		<div>
			<CalculateButton id="1" function={testFunction} />
			<p id="para"></p>
		</div>
	);
};

it('should get id passed in as prop', () => {
	render(<MockComponent />);

	const buttonElement: HTMLButtonElement = screen.getByRole('button');
	expect(buttonElement).toHaveAttribute('id', '1-btn');
});

it('should have funtion passed in as prop', () => {
	render(<MockComponent />);

	const buttonElement: HTMLButtonElement = screen.getByRole('button');
	fireEvent.click(buttonElement);
	expect(screen.getByText(/test/i).textContent).toBe('test');
});
