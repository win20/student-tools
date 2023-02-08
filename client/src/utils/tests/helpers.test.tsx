import { expect, vi } from 'vitest';
import { Helpers } from 'utils/helpers';
import { render, screen } from '@testing-library/react';

const MockButton = () => {
	return <button>Click me</button>;
};

it('should strip all spaces from input string', () => {
	const inputString = 'This is a test';
	const outputString: string = Helpers.stripAllSpaces(inputString);

	expect(outputString).not.toContain(' ');
});

it('should convert route to kebab case', () => {
	const inputRoute = 'Quadratic Formula';
	const outputRoute: string = Helpers.urlCleaner(inputRoute);

	expect(outputRoute).toBe('quadratic-formula');
});

it('should add animation classes to HTML element and remove it after timeout', async () => {
	vi.useFakeTimers();

	const animationName = 'shake-animation';
	const animationTime = 1000;

	render(<MockButton />);
	const buttonElement: HTMLElement = screen.getByRole('button');
	Helpers.animateOnEvent(buttonElement, animationName, animationTime);

	expect(buttonElement).toHaveClass(animationName);
	vi.advanceTimersByTime(1000);
	expect(buttonElement).not.toHaveClass(animationName);

	vi.resetAllMocks();
});
